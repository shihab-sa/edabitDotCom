function analyzeContent(content) {
  const trimmedContent = content.trim();

  if (trimmedContent.startsWith("<")) {
    // Detect HTML
    const tags = {};
    const htmlRegex = /<\s*([a-zA-Z0-9]+)/g;
    let match;

    while ((match = htmlRegex.exec(content)) !== null) {
      const tag = match[1];
      tags[tag] = (tags[tag] || 0) + 1;
    }

    return { contentType: "HTML", tags };
  } else if (trimmedContent.includes("{")) {
    // Detect CSS
    const cssTargets = {};
    const cssRegex = /([a-zA-Z0-9-]+)\s*{/g;
    let match;

    while ((match = cssRegex.exec(content)) !== null) {
      const target = match[1];
      cssTargets[target] = (cssTargets[target] || 0) + 1;
    }

    return { contentType: "CSS", cssTargets };
  } else {
    // Detect TEXT
    const lines = trimmedContent.split("\n");
    return { contentType: "TEXT", lineNumber: lines.length };
  }
}

// Test examples
console.log(analyzeContent("this is a test\nSeems to work"));
console.log(analyzeContent("body{blabla} a{color:#fff} a{ padding:0}"));
console.log(analyzeContent("<html><div></div><div></div></html"));
