const UserProfile =document.querySelector('.user_p');
auth.onAuthStateChanged(user => {
  
    if(user){
        console.log(user);
      
         db.collection('users').doc(user.uid).get().then(doc=>{

              const user_profile  = `<div class="userProfile">
              <div class="user_i">
                  <img src="1.jpg" alt="">
              </div>        
              <label class="title-label">Sign up cridentials</label><br>
              <label >Email </label><br>
              <label class="info">${user.email}</label><br>
              <label >Password</label> <br>
              <label class="info">${user.pass}</label><br> 
            <br>
            <label >Name</label><br>
            <label class="info">  ${doc.data().firstName}</label><br>  
            <label >Surname</label> <br>
            <label class="info">${doc.data().lastName}</label><br> 
            <label >Cell Province</label> <br>
            <label class="info">${doc.data().province}</label><br> 
            <label >Phone</label><br>
            <label class="info">${doc.data().contacts}</label><br>
            <label >Gender</label><br>
            <label class="info">${doc.data().gender}</label><br>
          </div>  
              `;
              
               UserProfile.innerHTML= user_profile;
         });
            
    }else{

    }
});