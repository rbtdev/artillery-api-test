const uniqid = require('uniqid');

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

module.exports = {
    getAdminCredentials,
    getPlayerData
}