var admin = require("firebase-admin");
var serviceAccount = require("C:\Users\acoro\Documents\code\futbusters-push-notif\futbusters-notif-firebase-adminsdk-19ax5-bbfba481f3.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://futbusters-notif.firebaseio.com"
});

var registrationToken = "";

var payload = {
    data: {
        MyKey1: "Hello"
    }
};

var options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
};

admin.messaging().sendToDevice(registrationToken, payload, options)
    .then(function(res) {
        console.log("Succesfully sent message:", res);
    })
    .catch(function(err) {
        console.log("Error sending message:", err);
    })