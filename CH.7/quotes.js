const quotes = [
  {
    quote: "If you want the present to be different from the past, study the past.",
    author: "Baruch Spinoza",
  },
  {
    quote: "A good plan, violently executed now, is better than a perfect plan next week.",
    author: "George S. Patton",
  },
  {
    quote: "What we dwell on is who we become.",
    author: "Oprah Winfrey",
  },
  {
    quote: "Hope begins in the dark, the stubborn hope that if you just show up and try to do the right thing, the dawn will come. You wait and watch and work: You don't give up.",
    author: "Anne Lamott",
  },
  {
    quote: "Wheresoever you go, go with all your heart.",
    author: "Confucious",
  },
  {
    quote: "The less their ability, the more their conceit.",
    author: "Ahad HaAm",
  },
  {
    quote: "Respect a man, he will do the more.",
    author: "James Howell",
  },
  {
    quote: "Having once decided to achieve a certain task, achieve it at all costs of tedium and distaste.The gain in self-confidence of having accomplished a tiresome labor is immense.",
    author: "Arnold Bennett",
  },
  {
    quote: "You always pass failure on the way to success.",
    author: "Mickey Rooney",
  },
  {
    quote: "People fail forward to success.",
    author: "Mary Kay Ash",
  }
] //배열 형태로 가지고 와야 한다.

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;