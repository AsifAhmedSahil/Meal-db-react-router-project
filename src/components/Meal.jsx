import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import ReciepIndex from "./ReciepIndex";

const Meal = () => {
    const [url, setUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    const [item,SetItem] = useState();
    const[show,setShow] = useState(false);
    const[search,setSearch] = useState("")

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data=>{
            console.log(data.meals);
            SetItem(data.meals);
            setShow(true);
        })
    },[url])

    const setIndex=(alpha)=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)

    }
    const searchReciepe = (event)=>{
        if(event.key == "Enter"){
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }

    }
  return (
    <div>
      <div className="main">
        <div className="heading">
          <h1>Search Your Favourite Food</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            ipsam omnis tenetur molestiae! Molestiae cupiditate voluptas sunt
            facilis animi corporis!
          </p>
        </div>
        <div className="search-box">
          <input type="text" className="searchBar" onChange={(e) =>setSearch(e.target.value)} onKeyPress={searchReciepe}/>
        </div>
        <div className="container">
          {
            show ? <MealItem data={item} />: 'Not Found Food! Search Again'
          }
        </div>
        <div className="indexContainer">
          <ReciepIndex alphaIndex = {(alpha)=>setIndex(alpha)}/>
        </div>
      </div>
    </div>
  );
};

export default Meal;
