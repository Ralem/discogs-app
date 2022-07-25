import React, { useEffect } from "react"; // to use fragments safely
import Button from "./components/Button";
import { useLazySearchByTermQuery } from "./store/services/discogs.api";

const App = () => {
  const [searchByTerm, { data: searchResult }] = useLazySearchByTermQuery();
  useEffect(() => {
    searchByTerm("Nirvana");
  }, []);
  console.log(searchResult);
  return (
    <>
      <h1>Hi</h1>
      <Button>Button</Button>
    </>
  );
};

export default App;
