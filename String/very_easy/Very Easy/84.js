// Retrieve the Subreddit
// Create a function to extract the name of the subreddit from its URL.

// Examples
// subReddit("https://www.reddit.com/r/funny/") ➞ "funny"

// subReddit("https://www.reddit.com/r/relationships/") ➞ "relationships"

// subReddit("https://www.reddit.com/r/mildlyinteresting/") ➞ "mildlyinteresting"
// Notes
// N/A

function subReddit(str) {
  let wordOfArr = str.split("/");
  return `"${wordOfArr[wordOfArr.length - 2]}"`;
}

console.log(subReddit("https://www.reddit.com/r/funny/"));
console.log(subReddit("https://www.reddit.com/r/relationships/"));
console.log(subReddit("https://www.reddit.com/r/mildlyinteresting/"));
