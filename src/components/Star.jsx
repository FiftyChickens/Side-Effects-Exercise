import { useEffect, useRef } from "react";

import "../assets/Star.css";

function Star({ id, position, destroyStar }) {
  const starRef = useRef(null);

  useEffect(() => {
    const star = starRef.current;
    star.focus();
  }, []);

  function handleClick(e) {
    console.log(e);
    destroyStar(id);
  }

  return (
    <div
      className={"star"}
      ref={starRef}
      onClick={handleClick}
      tabIndex="0"
      style={{ left: position.x, top: position.y }}
    >
      ⭐
    </div>
  );
}

export default Star;
