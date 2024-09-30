import { useState, useEffect } from "react";
import Star from "./Star.jsx";
import "../assets/Space.css";

function Space() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newStar = {
        id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        x: Math.random() * window.innerWidth - 40,
        y: Math.random() * window.innerHeight - 40,
      };

      setStars((prevStars) => [...prevStars, newStar]);
    }, 2500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function destroyStar(id) {
    setStars(stars.filter((star) => star.id !== id));
  }
  return (
    <div className={"space"}>
      {stars.map((star) => (
        <Star
          key={star.id}
          id={star.id}
          position={{ x: star.x, y: star.y }}
          destroyStar={destroyStar}
        />
      ))}
    </div>
  );
}

export default Space;
