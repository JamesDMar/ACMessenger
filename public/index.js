var msgCounter = 0;
function makeMessage(msg,s) {
    return {content:msg,id:msgCounter++,sender:s}
}
var msgOne = makeMessage("test message 1!");
var app = angular.module('app',[]);
app.controller('appController', function($scope) {
    $scope.message = msgOne;
});