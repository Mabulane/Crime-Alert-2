const alertList =document.querySelector('.alert-List');

db.collection('Alerts').get().then(snapshot => {
    setUIAlerts(snapshot.docs);
    //console.log(snapshot.docs);
});

const setUIAlerts = (data) => {
    let html='';
    data.forEach(doc => {
        const alert=doc.data();
        const li=`
         <li>
         <div class="a-card" >
            
         <div class="a-info">
           <span class="a-date">Monday</span>
           <span class="a-date">October 05 2019</span>
           <h3>${alert.alertName}</h3>
           
           <p>${alert.alertDiscription}</p>
           <span>${alert.geolocation}</span>
         </div>
         <div class="a-stats"></div>
         <div class="a-media">
           <img src="2.jpg" alt="">
         </div>
     </div> 
         </li>
        `;
        html +=li;
    });
    alertList.innerHTML=html;
};
