const quotes = [
  {
    text: "Believe in yourself and all that you are.",
    author: "Christian D. Larson"
  },
  {
    text: "Don’t stop until you’re proud.",
    author: "Unknown"
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Les Brown"
  },
  {
    text: "Great things never come from comfort zones.",
    author: "Roy T. Bennett"
  },
  {
    text: "Discipline is doing it even when you don’t feel like it.",
    author: "Jim Rohn"
  },
  {
    text: "Dream big. Work hard. Stay focused.",
    author: "Dwayne Johnson"
  },
  {
    text: "Success is what comes after you stop making excuses.",
    author: "Luis Galarza"
  },
  {
    text: "Make yourself proud.",
    author: "Peter W. Smith"
  },
  {
    text: "Small steps every day lead to big results.",
    author: "Unknown"
  },
  {
    text: "You are stronger than you think.",
    author: "Jillian Michaels"
  }
];
const quoteBox = document.getElementById("quoteBox");
const generateBtn = document.getElementById("generateBtn");
const authorBox = document.getElementById("authorBox");

generateBtn.addEventListener("click",function(){
    const randomIndex = Math.floor(Math.random()*quotes.length);
    const selectedQuote = quotes[randomIndex];

    quoteBox.textContent = `"${selectedQuote.text}"`;
    authorBox.textContent = `"${selectedQuote.author}"`;
    quoteBox.classList.remove("fade-in");
    void quoteBox.offsetWidth;
    quoteBox.classList.add("fade-in"); 
});
document.addEventListener("keydown",function(event){
    if(event.key==="Enter")
    {
        generateBtn.click();
    }
}); 