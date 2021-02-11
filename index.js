let cowsay = require('cowsay');
let request = require('request');

let params = {
    url: "http://helloacm.com/api/fortune",
    method: "GET"
};

let callback = function(error, response, body){
    if (!error) {
        if (response.statusCode === 200) {
            console.log(cowsay.say({
                text: body,
                e: "oO",
                T: "U"
            })
            );
        }
    } else {
        console.log("Network error", error);
    }
};

request(params, callback);