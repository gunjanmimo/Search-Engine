import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import { Link } from "react-router-dom";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // live api call
  //const { data } = useGoogleSearch(term);

  const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://pngimg.com/uploads/google/google_PNG19644.png"
            alt=""
            srcset=""
          />
        </Link>
      </div>
      <div className="searchPage__result"></div>
    </div>
  );
}

export default SearchPage;
