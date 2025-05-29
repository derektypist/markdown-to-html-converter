// Input and Output Elements
const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

// Regex to be used in convertMarkdown function
const regexH1 = /^#\s+([^\n]+)/gm;
const regexH2 = /^##\s+([^\n]+)/gm;
const regexH3 = /^###\s+([^\n]+)/gm;
const regexBold = /(?:\*\*|__)(.*?)(?:\*\*|__)/gm;
const regexItalic = /(?:\*|_)(.*?)(?:\*|_)/gm;
const regexImg = /!\[(.*?)]\((.*?)\s?(?:"(.*?)")?\)/gm;
const regexLink = /\[(.*?)]\((.*?)\s?(?:"(.*?)")?\)/gm;
const regexQuote = /^>\s+([^\n]+)/gm;

// Function to convertMarkdown
function convertMarkdown() {
  const markdownContent = markdownInput.value;
  let convertedText = markdownContent.replace(regexImg, '<img alt="$1" src="$2">').replace(regexLink, '<a href="$2">$1</a>').replace(regexBold,"<strong>$1</strong>").replace(regexItalic,"<em>$1</em>").replace(regexQuote,"<blockquote>$1</blockquote>").replace(regexH3,"<h3>$1</h3>").replace(regexH2,"<h2>$1</h2>").replace(regexH1,"<h1>$1</h1>");
  return convertedText;
}

// Event Listeners
markdownInput.addEventListener("input", () => {
  htmlOutput.textContent = convertMarkdown();
});

markdownInput.addEventListener("input", () => {
  htmlPreview.innerHTML = htmlOutput.textContent;
});
