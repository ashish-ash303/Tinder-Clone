import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import { useEffect } from "react";
import db from "./firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);


  useEffect(()=>{
   const unsubscribe= db.collection("People").onSnapshot(snapshot=>(
      setPeople(snapshot.docs.map(doc=>doc.data()))
    ))
    return ()=>{
      unsubscribe();
    }
    

  },[])
  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
    // setLastDirection (direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            omSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
      <h3>{person.name}</h3>
      </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
