const signIn = document.querySelector('#signin-form');

signIn.addEventListener('submit',(e) => {
    e.preventDefault();
//get input variable 
    const email = signIn['user-email'].value;
    const pass= signIn['user-password'].value; 
    auth.signinUserWithEmailAndPassword(email,pass).then(cred=>{
       // console.log(cred.user);
        //document.location.href="index.html";
        signIn.reset();
    }); 
});


