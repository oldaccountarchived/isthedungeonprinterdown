var exec = require('child_process').exec,
    express = require('express'),
    https = require('https'),
    http = require('http'),
    _ = require('lodash'),
    q = require('q');

var app = express();

app.get('/', function (req, res) {
    
});

function get_planet_allignment() {
    var deferred = q.defer();
    var planet_api_url =
            'https://rk1qh7r18l.execute-api.us-east-1.amazonaws.com/prod/alignments';
    https_request(planet_api_url, deferred);
    
    return deferred.promise;
}

function get_humidity_in_gnv() {
    var deferred = q.defer();
    var weather_api_url = 
            'http://api.openweathermap.org/data/2.5/weather?q=GainesvilleFL';
    http_request(weather_api_url, deferred);

    return deferred.promise;
};

function https_request(url, deferred) {
    https.get(url, function(res) {
        var dataBuffer = '';
        
        res.on('data', function(data) {
            dataBuffer += data.toString();
        });

        res.on('end', function() {
            deferred.resolve(JSON.parse(dataBuffer));
        });
    });
}

function http_request(url, deferred) {
    http.get(url, function(res) {
        var dataBuffer = '';
        
        res.on('data', function(data) {
            dataBuffer += data.toString();
        });

        res.on('end', function() {
            deferred.resolve(JSON.parse(dataBuffer));
        });
    });
}

function compute_probability() {
    var prob;
    get_humidity_in_gnv(
    ).then(function(weather) {
        prob = weather.main.humidity;
        return get_planet_allignment();
    }).then(function(planets) {
        prob *= planets.alignments.length;
        console.log(prob % 100);
    });
}

compute_probability();
