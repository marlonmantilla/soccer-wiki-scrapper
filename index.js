var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var cors    = require('cors');

app.use(cors());

app.get('/players', function (req, res) {

    res.setHeader('Content-Type', 'application/json');

    var playerName = req.query.name;

    var url = "https://en.wikipedia.org/wiki/" + playerName;

    return request(url, function (error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);

            var json = {name: "", dob: "", team: "", clubes: "", avatar: ""};

            $('.infobox').filter(function () {
                var data  = $(this);
                json.name = data.find('.nickname').first().text();
                json.dob  = data.find('.ForceAgeToShow').text();
                json.team = data.find('.org').first().first().text();


                var seniorCarrerEl = data.find('tr:contains("Senior career")');

                var untilObject = data.find('tr:contains("National team")');

                var carreerElements = seniorCarrerEl.next().nextUntil(untilObject);

                var teams = [];
                carreerElements.each(function (index, value) {
                    var current = $(value);
                    teams[index] = {
                        years: current.children().find('span').text(),
                        club: current.find('a').text()
                    };
                });
                json.clubes = teams;

                json.avatar = data.find('.image').find('img').attr('src');

            });


            if ( json.name === "" || json.name == undefined ) {

                $('.firstHeading').filter(function () {
                    var data = $(this);
                    json.name = data.text();
                });

            }

            return res.send(json);
        }else {
            return res.send(error);
        }
    }); 

});


app.listen('8081');

console.log('App running on localhost:8081');

exports = module.exports = app;