#!/usr/bin/env node

var ndef = require('ndef'),
    mifare = require('..'),
    message,
    bytes;
    
message = [
    ndef.emptyRecord()
];

bytes = ndef.encodeMessage(message);

mifare.write(bytes, function(err) {
    if (err) {
        console.log("Write failed ");
        console.log(err);
    } else {
        console.log("OK");
    }
});
