/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/* 
  This is an array with a selection of quote objects, each with the quote and source.
  A few quotes also have a citation or year property.
  The program will choose one to display at random.
*/

const quotes = [
	{quote: "Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!", source: "Billy Connolly", citation: "US Magazine", year: "1993", tags: "humor"},
	{quote: "People say nothing is impossible, but I do nothing every day.", source: "A. A. Milne", tags: "humor"},
	{quote: "Better to remain silent and be thought a fool than to speak out and remove all doubt.", source: "Abraham Lincoln", year: "1849", tags: "historical"},
	{quote: "The only mystery in life is why the kamikaze pilots wore helmets.", source: "Al McGuire"},
	{quote: "The difference between stupidity and genius is that genius has its limits.", source: "Albert Einstein", tags: "science"},
	{quote: "War is God’s way of teaching Americans geography.", source: "Ambrose Bierce"},
	{quote: "I don’t believe in astrology; I’m a Sagittarius and we’re skeptical.", source: "Arthur C. Clarke", tags: "humor"},
	{quote: "Money won’t buy happiness, but it will pay the salaries of a large research staff to study the problem.", source: "Bill Vaughan"},
	{quote: "The surest sign that intelligent life exists elsewhere in the universe is that it has never tried to contact us.", source: "Bill Watterson", tags: "authors"},
	{quote: "A bank is a place that will lend you money if you can prove that you don’t need it.", source: "Bob Hope"},
	{quote: "When I was a boy I was told that anybody could become President. I’m beginning to believe it.", source: "Clarence Darrow", tags: "political"},
	{quote: "A study in the Washington Post says that women have better verbal skills than men. I just want to say to the authors of that study: Duh.", source: "Conan O'Brien", year: "1999", tags: "stand-up"},
	{quote: "If you think you are too small to make a difference, try sleeping with a mosquito.", source: "Dalai Lama"},
	{quote: "I refuse to answer that question on the grounds that I don’t know the answer.", source: "Douglas Adams"},
	{quote: "How many people here have telekenetic powers? Raise my hand.", source: "Emo Philips"},
	{quote: "To those of you who received honours, awards and distinctions, I say well done. And to the C students, I say you, too, can be president of the United States.", source: "George W. Bush", tags: "politics"},
	{quote: "If you find it hard to laugh at yourself, I would be happy to do it for you.", source: "Groucho Marx"},
	{quote: "When we talk to God, we’re praying. When God talks to us, we’re schizophrenic.", source: "Jane Wagner", citation: "Colliers", year: "1982"},
	{quote: "The secret of the demagogue is to make himself as stupid as his audience so they believe they are clever as he.", source: "Karl Kraus"},
	{quote: "I always wanted to be somebody, but now I realize I should have been more specific.", source: "Lily Tomlin", citation: "CBS", year: "1985", tags: "stand-up"},
	{quote: "If you want your children to listen, try talking softly to someone else.", source: "Ann Landers"}
];

/*
	This function chooses a quote from the quotes array above, at random, and stores it in the variable randomNumber.
*/

function getRandomQuote() {
  let randomNumber = Math.floor( Math.random() * (quotes.length) );
  return quotes[randomNumber];
}

/*
	The second function generates a random color and stores it in the variable randomColor.
	Code adapted from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php.
*/

function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
    document.body.style.background = bgColor;
    }


/*
  This function prints the random quote stored in the getRandomQuote function to the screen, and changes the background color to the one stored in the variable randomColor, each time the button is clicked.
  It contains a timer that will change the quote and background color every 10 seconds.
  It contains three conditions that test for a "citation", "year", and "tags" property, and if it exists, also prints it to the screen.
  
*/

function printQuote() {
	let getQuote = getRandomQuote();
	let getColor = randomColor();
	let HTML = '<p class="quote">' + [getQuote.quote] + '</p>' + '<p class="source">' + [getQuote.source];
	if (getQuote.citation) {
	HTML += '<span class="citation">' + [getQuote.citation] + '</span>';
	}
	if (getQuote.year) {
	HTML += '<span class="year">' + [getQuote.year] + '</span>';
	}
	if (getQuote.tags) {
	HTML += '<span class="tags">' + [getQuote.tags] + '</span>';
	}
HTML += '</p>';	
document.getElementById("quote-box").innerHTML = HTML;
}

// let timerId = setInterval(() => printQuote(), 10000);

function timerId() {
  setInterval(function(){ printQuote(); }, 10000);
}
timerId();
printQuote();

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

