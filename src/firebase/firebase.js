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
riddim : "Bubble Up",
year : 2005,
available : true,
released : {
    songname : 'legalize it',
    artist: 'Sean Paul',
    country: 'Jamaica',
    recorded : 2005,
    price : '$10.00'
}
});

db.ref('other').set({
    fans : 1000000,
    weeks : '19 weeks',
    platinum : true
})