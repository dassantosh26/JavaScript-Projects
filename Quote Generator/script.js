const quoteContainer = document.getElementsByClassName("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const TwitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote-btn");
const loader = document.getElementsByClassName("loader");

let apiQuotes = [];

//Show New Quotes
function newQuote() {
  //Picking a random Quotes from API
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //   console.log(quote);
  //check if author field is blank then replace it wth unkonwn
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
}
//Getting Quotes from API
async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    // console.log(apiQuotes);
    newQuote();
  } catch (error) {
    console.log("Oops,No Quote ", error);
  }
}
getQuotes();

//Tweet Quotes
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}
//Event Listiner
newQuoteBtn.addEventListener("click", newQuote);
TwitterBtn.addEventListener("click", tweetQuote);
