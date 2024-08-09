import { useState } from "react";

const WordSearchApp = () => {
  const [searchWord, setSearchWord] = useState("");
  const [fetchedWords, setFetchedWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [wordNotFound, setWordNotFound] = useState(true);

  return (
    <div className="word-search-app">
      <form id="word-search-form">
        <input
          type="text"
          name="search_word"
          value={searchWord}
          placeholder="Enter a word"
          required
        />
        <button type="submit">Search</button>
      </form>

      <button id="copy-btn">Copy Word List</button>

      <div className="word-app-body">
        <div id="word-list"></div>
      </div>
    </div>
  );
};

export default WordSearchApp;
