import React from "react";
import { useState, useContext,useEffect } from "react";
import FeedBackContext from "../context/FeedBackContext";

function RatingSelect({ select }) {
  const { editFeed } = useContext(FeedBackContext);

  const [selected, setSelected] = useState(10);
 
  useEffect(() => {
    setSelected(editFeed.item.rating);
  }, [editFeed]);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
