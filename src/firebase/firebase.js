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

db.ref().set({
artist: 'Sean Paul',
riddim : "Bubble Up",
year : 2005,
available : true,
stores : ['Apple Store','Google Play','Basecamp'],
released : {
    songname : 'legalize it',
    country: 'Jamaica',
    recorded : 2005,
    price : '$10.00'
}
});
//Change Firebase DB values
// db.ref('released/price').set('$15.75');
// db.ref('released/country').set('Kingston,Jamaica');