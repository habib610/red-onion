import {
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "./Firebase.Config";
import { ProductContext, ProductConsumer } from "../../context";
import { useHistory, useLocation } from "react-router-dom";

// for material ui custom styles
const useStyles = makeStyles({
  root: {
    marginTop: '10vh ',
    marginBottom: "10vh",
    textAlign: 'center'
    ,
    "& .MuiFormControl-root": {
      marginBottom: "10px",
      background: "#f5f5f5",
    },
    '& .MuiOutlinedInput-input': {
      padding: '13px 12px'
    },
    '& .MuiButtonBase-root': {
      padding: '12px'
    },

    "& .MuiTypography-root": {
    //   color: "#ff9101",
      margin: "20px",
      textAlign: 'center'
    },
  },
  logo: {
    height: "50px",
    marginBottom: "20px",
  },
});

firebase.initializeApp(firebaseConfig);

const Login = () => {
  let history = useHistory();
  let location = useLocation();

  const classes = useStyles();
  const [newUser, setNewUser] = useState(false);

  var { handleUserLogin } = useContext(ProductContext);

  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    password: "",
    confirmPassword: "",
    photo: "",
    email: "",
    success: false,
    error: "",
  });

  ///Starting firebase Authentication
  var googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        handleUserLogin({
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        });

        setUser({
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        });
        let { from } = location.state || { from: { pathname: "/" } };
        history.replace(from);
      })
      .catch((error) => {});
  };

  // form validation
  const handleBlur = (e) => {
    let fieldValid = true;
    if (e.target.name === "email") {
      fieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }

    if (e.target.name === "password") {
      const passLength = e.target.value.length >= 6;
      const passNumber = /\d{1}/.test(e.target.value);
      fieldValid = passNumber && passLength;
    }

    if (fieldValid) {
      const userInfo = { ...user };
      userInfo[e.target.name] = e.target.value;
      setUser(userInfo);
    }
  };

  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
        console.log("I am new User")
        firebase.auth()
        .createUserWithEmailAndPassword(user.email, user.password)
  .then((res) => {
    // Signed in 
    const newUserInfo = {...user};
    newUserInfo.error = '';
    newUserInfo.success = true;
    setUser(newUserInfo)
    updateUserName(user.name)
    // console.log(res)

    // ...
  })
  .catch((error) => {
    // var errorCode = error.code;
    // var errorMessage = error.message;
    const newUserInfo = {...user};
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    setUser(newUserInfo)
    // ..
  });
    }
    if(!newUser && user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then((result) => {
    // Signed in 
    const newUserInfo = {...user};
    newUserInfo.error = '';
    newUserInfo.success = true;
    handleUserLogin({
        isSignIn: true,
        name: user.email,
        email: user.password,

      });

      setUser({
        isSignIn: true,
        name: user.email,
        email: user.password,
      });

      let { from } = location.state || { from: { pathname: "/" } };
      history.replace(from);

    // ...
  })
  .catch((error) => {
    const newUserInfo = {...user};
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    setUser(newUserInfo)
  });
    }
    e.preventDefault();
  };

  const updateUserName = name =>{
    var user = firebase.auth().currentUser;
    
    user.updateProfile({
      displayName: name,
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
        }
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <Container className={classes.root}>
            <Grid container justify="center" alignItems="center" spacing={2}>
              <Grid item sm={12} md={4}>
                <h1>{newUser ? "Registration" : "Login"}</h1>
                <img
                  className={classes.logo}
                  src="https://iili.io/2To1HJ.png"
                  alt=""
                />
                <form onSubmit={handleSubmit}>
                  {newUser && (
                    <TextField
                      name="name"
                      onBlur={handleBlur}
                      required
                      fullWidth
                      placeholder="Your Name"
                      variant="outlined"
                      color="secondary"
                    ></TextField>
                  )}
                  <TextField
                    name="email"
                    onBlur={handleBlur}
                    required
                    fullWidth
                    placeholder="Your Email"
                    variant="outlined"
                    color="secondary"
                    type="email"
                  ></TextField>
                  <TextField
                    name="password"
                    id="password"
                    onBlur={handleBlur}
                    required
                    fullWidth
                    placeholder="Password"
                    variant="outlined"
                    color="secondary"
                    type="password"
                  ></TextField>
                  <Button
                    color="secondary"
                    fullWidth
                    variant="contained"
                    type="Submit"
                  >
                    {newUser ? "Create Account" : "Login"}
                  </Button>
                 

                 { !newUser && <Typography variant="body1" color="secondary">
                 Don't have Account? <span className="hover"
                 onClick={()=> setNewUser(!newUser)}
                 >Sign Up</span>
                 </Typography>}

                 { newUser && <Typography variant="body1" color="secondary">
                Already have Account? <span className="hover"
                onClick={()=> setNewUser(!newUser)}
                >Login</span>
                 </Typography>}
              {
                  user.error && <p>{user.error}</p>
              }
              {
                  newUser && user.success && <p className="text-success text-center">Account Creation Successful</p>
              }



                </form>

                <Grid>
                  <div
                    className="d-flex algin-items-center border my-2 justify-content-around rounded-pill  py-2 px-5"
                    type="button"
                    onClick={handleGoogleSignIn}
                  >
                    <img
                      style={{ height: "30px" }}
                      src="https://iili.io/2xnMx9.png"
                      alt=""
                    />
                    <p className="mb-0 bolded">Continue With Google</p>
                  </div>
                </Grid>
                <Grid>
                  {/* <div
                    className="d-flex algin-items-center border justify-content-around rounded-pill  py-2 px-5"
                    type="button"
                  >
                    <img
                      style={{ height: "30px" }}
                      src="https://iili.io/2xnVVe.png"
                      alt=""
                    />
                    <p className="mb-0  bolded">Continue With Facebook</p>
                  </div> */}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        );
      }}
    </ProductConsumer>
  );
};

export default Login;
