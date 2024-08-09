import { useState } from "react";

const WordSearchApp = () => {
  const [searchWord, setSearchWord] = useState("");
  const [fetchedWords, setFetchedWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [wordNotFound, setWordNotFound] = useState(true);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    fetchSynWords(searchWord);
  };

  const fetchSynWords = async (searchWord) => {
    const url = `https://api.datamuse.com/words?rel_syn=${searchWord}`;
    try {
      setLoading(true);
      const response = await fetch(url);
      const fetchedData = await response.json();
      setLoading(false);
      setFetchedWords(fetchedData);
      setWordNotFound(fetchedData.length === 0);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    console.log(searchWord);
  };

  const copyWordList = () => {
    if (!wordNotFound) {
      const words = fetchedWords.map((word) => word.word);
      const wordToCopy = words.join(", ");
      navigator.clipboard.writeText(wordToCopy);
      console.log("Copied:", wordToCopy);
    } else {
      console.log("Nothing to copy");
    }
  };

  return (
    <div className="word-search-app">
      <form id="word-search-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="search_word"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
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
