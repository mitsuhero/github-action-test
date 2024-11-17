console.log(1);
const core = require("@actions/core");
console.log(2);
const github = require("@actions/github");
console.log(3);
// const form = require("isomorphic-form-data") ;
// console.log(4);
// const fetch = require("isomorphic-fetch");
const backlogjs = require("backlog-js");
console.log(4);
console.log(5);


const backlogFetch = () => {
  const host = "mitsutone.backlog.com";
  const apiKey = process.env.BACKLOG_API_KEY;
  // Use API Key
  const backlog = new backlogjs.Backlog({ host, apiKey });
  // Returns information about your space.
  backlog
    .getSpace()
    .then((data) => {
      console.log("space:", data);
    })
    .catch((err) => {
      console.log("error:", JSON.stringify(err, null, 2));
    });
};
// try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput("who-to-greet");
  console.log(`Hello ${nameToGreet}!`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
  console.log("process.env:" + JSON.stringify(process.env, null, 2));
  backlogFetch()
// } catch (error) {
//   core.setFailed(error.message);
// }
