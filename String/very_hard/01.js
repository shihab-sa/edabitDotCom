function analyzeContent(content) {
  const trimmedContent = content.trim(); // Remove leading/trailing white space
  let contentType = "TEXT";
  let tags = {};
  let cssTargets = {};
  let lineNumber = trimmedContent.split("\n").length;

  // Check for HTML tags
  if (/^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/.test(trimmedContent)) {
    contentType = "HTML";
    const htmlTags = trimmedContent.match(/<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/g);
    if (htmlTags) {
      htmlTags.forEach(tag => {
        const tagName = tag.replace(/<([a-z]+)[^>]*>.*/, "$1");
        tags[tagName] = (tags[tagName] || 0) + 1;
      });
    }
  } 
  // Check for CSS selectors
  else if (/^[a-zA-Z0-9\W]*\{[^}]*\}$/g.test(trimmedContent)) {
    contentType = "CSS";
    const cssSelectors = trimmedContent.match(/([a-zA-Z0-9\W]+)\{/g);
    if (cssSelectors) {
      cssSelectors.forEach(selector => {
        const selectorName = selector.replace(/\{/, "").trim();
        cssTargets[selectorName] = (cssTargets[selectorName] || 0) + 1;
      });
    }
  }

  return { contentType, tags, cssTargets, lineNumber };
}


console.log(analyzeContent("this is a test\nSeems to work"))