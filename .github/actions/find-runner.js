const { Octokit } = require("@octokit/action");

const octokit = new Octokit();

get_async()

async function get_async () {
  for (var i=0; i < 3000; i++) {
    const result = await octokit.request('GET /repos/Homebrew/homebrew-core/actions/runners')
    const { runners: [{ status, busy }] } = result.data
    if (busy == false) {
      console.log("true");
      break;
    }

    await new Promise(resolve => setTimeout(resolve, 5000));
  }
}
