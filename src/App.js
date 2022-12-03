import React from 'react';
import './App.css';





function App() {

  //fetch stuff from the apge
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayCocktail(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  //declara function to display the data
  function displayCocktail(data) {
    const cocktail = data.drinks[0];

    //get element by ID (div)
    const cocktailDiv = document.getElementById("cocktail");


    // this craetes the name for the variable to display the html element
    const cocktailName = cocktail.strDrink;

    //create text element!!!
  const heading = document.createElement("h1");
  //this sets the HTML to the extracted data
  heading.innerHTML = cocktailName;
  cocktailDiv.appendChild(heading);

//create image element!!!
  const cocktailImg = document.createElement("img");
  cocktailImg.src = cocktail.strDrinkThumb;
  cocktailDiv.appendChild(cocktailImg);


  ///this is for the background
  document.body.style.backgroundImage = "url('" + cocktail.strDrinkThumb + "')";


  }   


  return (
    <div>
      <h1>Hello</h1>
      <div id="cocktail"></div>
      <div id="overlay"></div>
    </div>
  );
}

export default App;
