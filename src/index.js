import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRaiting from "./StarRaiting";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRaiting color="blue" maxRating={10} onSetRaiting={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRaiting maxRating={5} />
    <StarRaiting
      size={24}
      color="red"
      className="test"
      messages={["Terrible", "Bad", "Okay", "God", "Amazing"]}
      defaultRating={3}
    />
    <Test /> */}
  </React.StrictMode>
);
