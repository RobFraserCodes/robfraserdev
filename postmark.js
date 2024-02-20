import * as postmark from "postmark";
const serverToken = process.env.POSTMARK_API_TOKEN;
let client = new postmark.ServerClient(serverToken);

export default client;