import { useState } from 'react';
import './QuoteGenerator.css';

export default function QuoteGenerator() {
  const quotes = [
    {quote: "Wig.", sayer: "- Noah Davis"},
    {quote: "It's okay now. Why? Because I am here!", sayer:  "- All Might"},
    {quote: "55 burgers, 55 fries, 55 tacos, 55 pies, 55 cokes, 100 tater tots, 100 pizzas, 100 tenders, 100 meatballs, 100 coffees, 55 wings, 55 shakes, 55 pancakes, 55 pastas, 55 peppers and 155 taters", sayer:  "- Tim Robinson"},
    {quote: "I am the one who knocks!", sayer: "- Walter White"},
    {quote: " ... ", sayer: "- Link"},
    {quote: "I am Groot.", sayer: "- Groot"}
  ];

  const quotes_images = [
    "https://media.tenor.com/xsmm0SCbijQAAAAM/katy-perry-wig.gif",
    "https://static.wikitide.net/deathbattlewiki/5/5e/Portrait.allmight.png",
    "https://i.imgur.com/Wb5GdZc.jpg",
    "https://i.pinimg.com/originals/c1/4d/c5/c14dc541214113d298aabab21c0a7e11.gif",
    "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/05/zelda-tears-of-the-kingdom-link-tingle-outfit-characters-scared.jpg",
    "https://static.wikia.nocookie.net/marvelmovies/images/4/4c/GOTG_Groot_Poster.jpg/revision/latest/scale-to-width-down/1200?cb=20160512212218",
  ];

  const [currentQuote, setCurrentQuote] = useState("");
  const [currentImage, setCurrentImage] = useState("https://media.tenor.com/gWbbLIR91zMAAAAM/sigma.gif"); // default peely
  const [currentSayer, setCurrentSayer] = useState("");

  function handleOnButtonClick() {
    // quote and sayer
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedIndex = quotes[randomIndex];
    setCurrentQuote(selectedIndex.quote);
    setCurrentSayer(selectedIndex.sayer);

    //image for quote
    const selectedIndex_image = quotes_images[randomIndex];
    setCurrentImage(selectedIndex_image);
  }
  return (
    <>
    <body>
    <div className="container">
      <h1>Random Quote Generator</h1>

      <div className="quote-container">
        <div className="quote-side-by-side"><span className="quote-text">''</span><p className="quote-full-text">{currentQuote}</p><span className="quote-text">''</span></div>
      </div>

      <div className="sayer-container">
        <p>{currentSayer}</p>
      </div>

      <div className="image-container">
        <img src={currentImage} alt="Quote Image" />
      </div>

      <button onClick={handleOnButtonClick}>Generate random quote...</button>
    </div>
    </body>
      
    </>
  );
}