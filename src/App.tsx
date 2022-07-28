import React, { ChangeEvent } from "react"; // to use fragments safely
import { useLazySearchByTermQuery } from "./store/services/discogs.api";
import Navbar from "./components/Navbar";
import RecordDisplay from "./components/RecordDisplay";
import RecordsLayout from "./components/RecordsLayout";
import SearchBar from "./components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import {
  addToHistory,
  getSearchSliceItem,
  setSearchTerm,
} from "./store/slices/search.slice";

const App = () => {
  const dispatch = useDispatch();
  const [searchByTerm, { data: searchResult, error, isLoading }] =
    useLazySearchByTermQuery();

  const history = useSelector(getSearchSliceItem("history"));
  const searchTerm = useSelector(getSearchSliceItem("searchTerm"));

  const handleSearch = (searchTerm: string) => {
    searchByTerm(searchTerm);
    dispatch(addToHistory(searchTerm));
  };
  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };
  return (
    <>
      <Navbar>
        <SearchBar
          searchTerm={searchTerm}
          history={history}
          onSearch={handleSearch}
          onChange={handleSearchTermChange}
        />
      </Navbar>
      <RecordsLayout>
        {isLoading
          ? "Loading"
          : error
          ? "Error"
          : searchResult?.results?.map(record => (
              <RecordDisplay
                key={record.id}
                title={record.title}
                coverImageSrc={record.thumb}
              />
            ))}
      </RecordsLayout>
    </>
  );
};

export default App;
