angular
    .module('core', [])
    .controller('StatusController', ['$scope'], StatusController);

function StatusController($scope) {

    // Shamelessly ripped from stack overflow because that's the
    // spirit of weekend hacking and this isn't node.js so I
    // don't have that swanky crypto module.
    function randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) {
            result += chars[Math.round(Math.random() * (chars.length - 1))];
        }
        return result;
    }
    
    this.localAuth = function() {
        var keylength = 128;
        var characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (!localStorage.key || localStorage.key.length < keylength) {
            // Yup, you could totally just set this thing to something
            // else and fuck my day up.
            localStorage.key = randomString(
                keylength, characters
            );
        }
    };

    this.getStatus = function() {
        
    };
    
    this.voteDown = function() {
        
    };

    this.voteUp = function() {

    };
};
