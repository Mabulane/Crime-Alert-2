const logUserOut = document.querySelector('#log-user-out');
logUserOut.querySelector('click',(e)=>{
    e.preventDefault();

    auth.signOut().then(()=>{
        document.location.href="index.html";
    });

});