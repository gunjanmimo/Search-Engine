import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "f68196c13895e8d81";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        "https://www.googleapis.com/customsearch/v1?/key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}"
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
  }, [term]);

  return { data };
};

export default useGoogleSearch;
