import React, { useState, useEffect } from "react";
import FlatList from 'flatlist-react';
import { Audio } from 'react-loader-spinner'


const url = "https://swapi.dev/api/people/?page=1";

const App = () => {
  const [quotes, setQuotes] = useState([]);

  //Fetch Quotes from API
  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data.results);
      } )
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };


const renderPerson = (list) => { 
  return ( 
  <div className="list"> 
  
  <h5>{list.name}</h5>
  <li>Height: {list.height}</li>
  <li>Mass: {list.mass}</li>
  <li>Hair Color: {list.hair_color}</li>
  <li>Gender: {list.gender}</li>
  <li>Skin Color: {list.skin_color}</li>
  <li>Eye Color: {list.eye_color}</li>
  <li>Birth Yeart: {list.birth_year}</li>

  </div> 
  ); 
  } 

 
  return (
    <div className="box-centerside">
     
      <FlatList 
        list={quotes} 
        renderItem={renderPerson} 
        renderWhenEmpty={() => 
        <div>
          <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
        </div>} 
        /> 
      
       
    </div>
  );
};

export default App;
