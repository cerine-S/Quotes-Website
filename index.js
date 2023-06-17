let quotes = [
  {
    text: "If you only shine light on your flaws, All your perfects will dim.",
    author: "Colleen Hoover",
  },
  {
    text: "It's the small things people do for others that define the largest part of them.",
    author: "Colleen hoover",
  },
  {
    text: "WHen life gets you down, do you wanna know what you've gotta do? 'JUST KEEP SWIMMING'.",
    author: "Dory the fish",
  },
  {
    text: "If you can dream it, you can do it.",
    author: "Walt Disney",
  },
  {
    text: "She wasn't fragile like a flower she was fragile like a bomb.",
    author: "Uknown",
  },
  {
    text: "You're the one who has to live your life,don't apologize to other people for the decisions you make for yourself.",
    author: "Lucy Score",
  },
  {
    text: "Idiots are highly flammble,love.Let them all burn in hell.",
    author: "Aaron Warner",
  },
  {
    text: "That's the problem with a puppet government: It's not going to run itself.",
    author: "Jude Duarte",
  },
];
//these are the variables i needed
let quote = null;
let favButton = document.getElementById("favBtn");
let favoriteQuotes = [];

//this function is the one i used to generate the quotes , so i used the random method to generate any quote i added before , and then i displayed them using the concatenation between the quote and its author
function generateQuote() {
  let r = Math.floor(Math.random() * quotes.length);
  quote = quotes[r];

  document.getElementById("quoteText").textContent = quote.text;
  document.getElementById("quoteAuthor").textContent = "- " + quote.author;
  resetFavoriteButton();
}
function resetFavoriteButton() {
  favButton.classList.remove("clicked");
}
//this function verifies if a quote is displayed in the quote container , if yes it verifies that that specific quote is not already in my favorites(using the some method) then it pushes it there and display it on the console
function addToFavorites() {
  if (quote !== null) {
    const isAlreadyFavorite = favoriteQuotes.some(
      (favorite) =>
        favorite.text === quote.text && favorite.author === quote.author
    );

    if (!isAlreadyFavorite) {
      favoriteQuotes.push(quote);
      console.log("Added to favorites:", quote);
      favButton.classList.add("clicked");
      saveFavoriteQuotes();
    }
  }
}

function saveFavoriteQuotes() {
  localStorage.setItem("favoriteQuotes", JSON.stringify(favoriteQuotes));
  displayFavoriteQuotes();
}
