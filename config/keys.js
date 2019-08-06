const USERNAME = "jaymndz";
const PASSWORD = "jaymndz";
const CLUSTER = "cluster0";
module.exports = {
  // mongoURI: `mongodb+srv://${USERNAMAE}:${PASSWORD}@dev-connector-lcoec.gcp.mongodb.net/test?retryWrites=true&w=majority`,
  mongoURI: `mongodb+srv://${USERNAMAE}:${PASSWORD}@${CLUSTER}-npdc2.gcp.mongodb.net/test?retryWrites=true&w=majority`,
  secretOrKey: 'secret'
}
// mongodb+srv://jaymndz:<password>@dev-connector-lcoec.gcp.mongodb.net/test?retryWrites=true&w=majority