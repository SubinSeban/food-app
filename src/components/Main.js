import Card from "../components/Card";
import { useState,useEffect } from "react";

const Main = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log(listOfRestaurant)
  }, [listOfRestaurant]);
  const fetchData = async () => {
     fetch (
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=9.927532&lng=76.2638427&carousel=true&third_party_vendor=1"
    ) .then(async(data)=>{
       const json = await data.json();
       setListOfRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    })
  
   
    
  };

  return (
    <div className="main">
      <div className="mainContainer">
        {listOfRestaurant.map((restaurants,index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};
export default Main;
