angular
    .module('IsTheDungeonPrinterDown', [])
    .controller('CoreController', CoreController);

function CoreController($http) {
    // Ah, arrow functions, please come soon.
    var self = this;
    
    this.reportStatus = function() {
        $http.post('/report', this.report).then(function(res) {
            
        }, function(err) {
            
        });
    };

    this.getStatus = function() {
        $http.get('/status').then(function(res) {
            self.status = res.data.status;
            if (self.status == 'down') {
                self.bgClass='red-bg';
                self.emojiClass='twa twa-scream';
                self.footerClass='footer-red';
                self.saying = 'PROBS.';
            } else {
                self.bgClass='green-bg';
                self.emojiClass='twa twa-sunglasses';
                self.footerClass='footer-green';
                self.saying = 'NAH.';
            }
        }, function(err) {
            
        });
    };
};

CoreController.$inject = ['$http'];
