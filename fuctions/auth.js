const signUp = document.querySelector('#signup-form');


signUp.addEventListener('submit',(e) =>{
    e.preventDefault();
//get input variable 
    const email = signUp['user-email'].value;
    const pass= signUp['user-password'].value;

    auth.createUserWithEmailAndPassword(email,pass).then(cred=>{
       // console.log(cred.user);
        //document.location.href="index.html";
        return db.collection('users').doc(cred.user.uid).set({
            firstName : signUp['first-name'].value,
            lastName :  signUp['last-name'].value,
            province :  signUp['Province'].value,
            contacts :  signUp['phone-no'].value,
            gender :   signUp['gender-type'].value
        });
    }).then(()=>{
        signUp.reset();   
        window.location='index.html';
        //document.location.href="index.html";
    });
});





/*
https://www.google.com/maps/d/u/0/

*/