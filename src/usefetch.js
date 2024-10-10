import { useState, useEffect } from "react";

const useFetch = (url) => {
  const abortCont = new AbortController();
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
          setisPending(false);
        });
    }, 1000);
  }, [url]);

  return { data, isPending };
};

export default useFetch;
