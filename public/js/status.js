/*global angular, localStorage*/

angular
    .module('IsTheDungeonPrinterDown', [])
    .controller('StatusController', StatusController);

function StatusController($http) {
    // Ah, arrow functions, please come soon.
    var self = this;

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
        var tokenLength = 128;
        var characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (!localStorage.authToken || localStorage.authToken.length < tokenLength) {
            // Yup, you could totally just set this thing to something
            // else and fuck my day up.
            localStorage.authToken = randomString(
                tokenLength, characters
            );
        }
    };

    this.reportStatus = function(status) {
        self.localAuth();
        self.report = {
            status: status,
            authToken: localStorage.authToken
        };
        $http.post('/report', self.report).then(function(res) {
            self.getStatus();
        }, function(err) {
            console.err('Something went horribly wrong.');
        });
    };

    this.getStatus = function() {
        $http.get('/status').then(function(res) {
            self.status = res.data.status;
            if (self.status == 'down') {
                self.bgClass = 'red-bg';
                self.emojiClass = 'twa twa-scream';
                self.footerClass = 'footer-red';
                self.saying = 'PROBS.';
            } else {
                self.bgClass = 'green-bg';
                self.emojiClass = 'twa twa-sunglasses';
                self.footerClass = 'footer-green';
                self.saying = 'NAH.';
            }
        }, function(err) {
            console.err('Something went horribly wrong.');
        });
    };
};

StatusController.$inject = ['$http'];
