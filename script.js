import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: 'YOUR-TOKEN'
  });

  await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "octocat",
    repo: "Spoon-Knife",
  });
