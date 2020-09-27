const formCtAlert = document.querySelector('#create-alert');

formCtAlert.addEventListener('submit',(e) =>{
    e.preventDefault();
   db.collection('Alerts').add({
        alertName: formCtAlert['altName'].value,
        alertDiscription: formCtAlert['disc'].value,
        geolocation:formCtAlert['location'].value
   }).then(() =>{
    formCtAlert.reset();
   });
});

