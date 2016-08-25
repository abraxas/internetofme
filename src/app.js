var firebase = require('firebase/app');
require('firebase/auth');
var fbconfig = {
    apiKey: "AIzaSyBcQjCnRoEo5t8vwPEhqh2-JhRH7D-bXzo",
    authDomain: "internetofme-33c66.firebaseapp.com",
    databaseURL: "https://internetofme-33c66.firebaseio.com",
    storageBucket: "internetofme-33c66.appspot.com",
};

firebase.initializeApp(fbconfig);


var app = angular.module('materializeApp', ['ui.materialize']);

app.factory('authService', function () {
    var self = {};
    self.authData = null; //$cookies.getObj('internetofme_auth');

    //firebase.auth().onAuthStateChanged(function(newAuth) {
    //    $cookies.putObj('internetofme_auth',newAuth);
    //});

    self.watch = function (cmd) {
        firebase.auth().onAuthStateChanged(cmd);
    };

    self.login = firebase.auth().signInWithEmailAndPassword.bind(firebase.auth());

    return self;
});

app.controller('BodyController', function ($scope, authService) {

    $scope.select = {
        value: "Option0",
        choices: ["Option0", "MKAY: I'm an option!", "This is so materialized!"]
    };

    if (!authService.authData) {
        firebase.auth().signInWithEmailAndPassword(
            'cjay.martin@gmail.com',
            'magick'
        );
    }
});