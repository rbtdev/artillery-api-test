const uniqid = require('uniqid');
const fs = require('fs');
const log = fs.createWriteStream("artillery-log.txt", {flags:'w'});

function getAdminCredentials(context, events, done) {
    let adminCredentials = {
        email: 'admin@test.com',
        password: 'foobarbaz'
    }
    context.vars.adminCredentials = adminCredentials;
    return done();
}

function getPlayerData(context, events, done) {
    let name = uniqid();
    let playerData = {
        name: `${name}`,
        email: `${name}@test.com`
    }
    context.vars.playerData = playerData;
    return done();
}

function logRequest(request, context, ee, done) {
    return done();
}

function logResponse(request, response, context, ee, done) {
    let requestLogMsg = `${response.request.method}: ${response.request.uri.href} - ${response.request.body}`;
    let responseLogMsg  = `${response.statusCode} - ${JSON.stringify(response.body)}`;
    log.write(`Request: ${requestLogMsg}\nResponse: ${responseLogMsg}\n`, (err => {
        if (err) {
            console.error('Error writing to log file:', err);
            process.exit(1);
        }
    }));
    return done();
}

module.exports = {
    getAdminCredentials,
    getPlayerData,
    logRequest,
    logResponse
}