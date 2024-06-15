import React, { useState, useEffect } from "react";
import "./App.css";
import RepoList from "./components/RepoList";
import Pagination from "./components/Pagination";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [username, setUsername] = useState("");
  const [searched, setSearched] = useState(false);

  const fetchRepos = async (username, page) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?page=${page}&per_page=10`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRepos(data);
      setSearched(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searched) {
      fetchRepos(username, page);
    }
  }, [username, page, searched]);

  const handleSearch = () => {
    setPage(1); // Reset page to 1 when searching
    setSearched(true);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setSearched(false); // Reset searched state when username changes
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="App">
      <h1>GitHub Repositories</h1>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        searched && (
          <>
            <RepoList repos={repos} />
            <Pagination
              page={page}
              onPageChange={handlePageChange}
              hasNextPage={repos.length === 10} // Assuming GitHub API returns 10 items per page
            />
          </>
        )
      )}
    </div>
  );
};

export default App;
