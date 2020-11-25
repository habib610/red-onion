import { Button, Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from './Firebase.Config';
import { ProductConsumer } from '../../context';




// for material ui custom styles
const useStyles = makeStyles({
    root:{
        '& .MuiFormControl-root': {
            marginBottom:'10px',
            background: '#f5f5f5'
        },
        '& .MuiButtonBase-root': {
            padding: '15px'
        },
        '& .MuiTypography-root': {
            color: 'red',
            margin: '20px',
            cursor: 'pointer'
        },
    },
    logo:{
        height: '50px',
        marginBottom: '20px'
    }
})

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const classes = useStyles();
    const [newUser, setNewUser] = useState(true);



const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    password:'',
    confirmPassword: '',
    photo: '',
    email: '',
    success: '',
    error: '',

})

///Starting firebase Authentication
var googleProvider = new firebase.auth.GoogleAuthProvider();
const handleGoogleSignIn =()=>{
    firebase.auth().signInWithPopup(googleProvider)
    .then(result=> {
        const {displayName, photoURL, email} = result.user;
        setUser({
            isSignIn: true,
            name: displayName,
            email: email,
            photo: photoURL
        })

      })
      .catch(error => {
      });
}


// form validation 
const handleBlur =(e)=>{
    let fieldValid = true;
    if(e.target.name==='email'){
     fieldValid = /\S+@\S+\.\S+/.test(e.target.value);
}
if(e.target.name==='password'){
    const passLength = e.target.value.length >= 6;
    const passNumber = /\d{1}/.test(e.target.value);
    fieldValid = passNumber && passLength;
}
if(e.target.name==='confirmPassword'){
    const confirmPassword = e.target.value ===  document.getElementById('password').value;
   if (confirmPassword !== true) {alert('Password dose not match');
// setUser({confirmPassword : ''});
fieldValid = false;
}
else{
    fieldValid = true;
}
}

if(fieldValid){
    const userInfo = {...user};
    userInfo[e.target.name] = e.target.value;
    setUser(userInfo);
}

}
const handleSubmit =(e) =>{
    console.log(user.email, user.password, user.confirmPassword)
    if(user.email && user.password && user.confirmPassword && user.name){
        console.log('submitting!')
    }
    e.preventDefault();
}

    return (
<ProductConsumer>
    {
        value => {
            const {handleUserLogin} = value;
            if(user.name){
                handleUserLogin(user)
            }
return (
    <Container   className={classes.root}>

        <h3>Name: {user.name}</h3>
        <h3>email: {user.email}</h3>
        <h3>password: {user.password}</h3>
        <h3>Confirm password: {user.confirmPassword}</h3>




            <Grid container justify="center" spacing={2}>
                <Grid item sm={12} md={4}>
                <h1>{newUser ? "Registration" : "Login"}</h1>
                <img className={classes.logo} src="https://iili.io/2To1HJ.png" alt=""/>
                <form onSubmit={handleSubmit}>
              { newUser &&  <TextField name="name" onBlur={handleBlur}  required fullWidth placeholder="Your Name" variant="outlined" color="secondary" >
                </TextField>}
                <TextField  name="email" onBlur={handleBlur} required fullWidth placeholder="Your Email" variant="outlined" color="secondary" type="email">
                </TextField>
                <TextField name="password" id="password" onBlur={handleBlur}  required fullWidth placeholder="Password" variant="outlined" color="secondary" type="password">
                </TextField>
                {newUser && <TextField  name="confirmPassword"  onBlur={handleBlur}  required fullWidth placeholder="Confirm Password" variant="outlined" color="secondary" type="password">
                </TextField>}
    <Button color="secondary" fullWidth variant="contained" type="Submit" >{newUser? "Submit" : 'Login'}</Button>
              { newUser &&  <Typography variant="body1" onClick={()=>setNewUser(false)} component="p"   >
                    Already have an account
                </Typography>}
              { !newUser &&  <Typography variant="body1" onClick={()=>setNewUser(true)} component="p" color="warning"  >
                   Don't have account
                </Typography>}
                </form>



                <Grid >
                <div className="d-flex algin-items-center border my-2 justify-content-around rounded-pill  py-2 px-5" type="button" onClick={handleGoogleSignIn}>
                <img style={{ height: '30px' }} src="https://iili.io/2xnMx9.png" alt="" />
                <p className="mb-0 bolded">Continue With Google</p>
                </div>
                </Grid>
                <Grid >
                <div className="d-flex algin-items-center border justify-content-around rounded-pill  py-2 px-5" type="button">
                <img style={{ height: '30px' }} src="https://iili.io/2xnVVe.png" alt="" />
                <p className="mb-0  bolded">Continue With Facebook</p>
                </div>
                </Grid>

            </Grid>
            </Grid>

        </Container>
)
        }
    }
</ProductConsumer>
        
    );
};

export default Login;