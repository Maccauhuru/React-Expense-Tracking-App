import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAOPEFFb6YVlLKxrOuNPoIvTx-KirdDIm0",
    authDomain: "expensify-8c238.firebaseapp.com",
    databaseURL: "https://expensify-8c238.firebaseio.com",
    projectId: "expensify-8c238",
    storageBucket: "expensify-8c238.appspot.com",
    messagingSenderId: "1016391451592"
};
firebase.initializeApp(config);
const db = firebase.database();

db.ref('expenses').push({
    description :'Food',
    note : '',
    amount:12500,
    createdAt:12081982
});
db.ref('expenses').push({
    description :'Clothes',
    note : '',
    amount:1070,
    createdAt:14071998
});
db.ref('expenses').push({
    description :'Medicine',
    note : '',
    amount:89010,
    createdAt:18031991
});

// db.ref('notes').push({
//     title: 'All eyes on me',
//     author: 'Tupac Shakur'
// });

//Retrieve Snapshot from DB
// const onValueChange = db.ref().on('value',(snapshot)=>{
//     const data = snapshot.val();
//     console.log(`${data.artist} is currently living in ${data.released.country}`);
// },(err)=>{
// console.error('Snapshot failed to retrieve', err)
// });



//Fetch all the data
// db.ref('artist').once('value').then((snapshot)=>{
// const data = snapshot.val();
// console.log('data fetched successsfully :' ,data);
// }).catch((err)=>{
// console.log('something went wrong!',err)
// });

// //Fetch only the changed data
// db.ref().on('value',(snapshot)=>{
//     const data = snapshot.val();
//     console.log('data fetched successsfully :', data);
//     });


// db.ref().set({
// artist: 'Sean Paul',
// riddim : "Bubble Up",
// year : 2005,
// available : true,
// stores : ['Apple Store','Google Play','Basecamp'],
// released : {
//     songname : 'legalize it',
//     country: 'Jamaica',
//     recorded : 2005,
//     price : '$10.00'
// }
// }).then(console.log('Data is saved!')).catch((err)=>{
// console.log("Opps...error! :", err)
// })

// //Change Firebase DB values
// db.ref('released/price').set('$19.99').then(console.log('price updated!')).catch((e)=>{
//     console.error('update price failed!', e)
// });
// db.ref('released/country').set('New Kingston,Jamaica').then(console.log('country updated!')).catch((err)=>{
//     console.error('Country update failed!' ,err)
// });


//Remove DB Elements
// var removeStores = db.ref('stores');
// removeStores.remove()
//     .then(function () {
//         console.log("Remove succeeded.")
//     })
//     .catch(function (error) {
//         console.log("Remove failed: " + error.message)
//     });

//Update the data 

// db.ref().update({
//     artist: 'Buju Banton',
//     riddim: "Batty Rider",
//     year: 1992,

// });