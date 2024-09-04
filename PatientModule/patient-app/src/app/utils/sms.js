import twilio from "twilio"

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = new twilio.Twilio(accountSid, authToken);

module.exports = client;