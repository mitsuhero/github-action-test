/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
console.log(1);
const core = require("@actions/core");
console.log(2);
const github = require("@actions/github");
console.log(3);
// const form = require("isomorphic-form-data") ;
// console.log(4);
// const fetch = require("isomorphic-fetch");
const backlogjs = require("backlog-js");

const backlogFetch = () => {
  const host = "https://mitsutone.backlog.com/projects/MITSUTONE_FRONT";
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
      console.log("error:", err.message);
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

