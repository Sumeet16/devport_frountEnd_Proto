// src/components/Repositories.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [initalCountValue, setInitalCountValue] = useState(1);

  const fetchData = (initalCount = 1) => {
    // Fetch user repositories with the access token

    const accessToken = localStorage.getItem("token"); // Retrieve this from where you stored it
    const page = initalCount; // The page number you want to fetch

    const headers = {
      Authorization: `token ${accessToken}`,
    };

    axios.get('https://api.github.com/user/repos', {
      params: {
        page: page,
      },
      headers: headers,
    })
      .then((response) => {
        setRepositories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching repositories:', error);
      });
  }

  useEffect(() => {
    fetchData()
  }, []);

  const copyRepositoryLink = async (repo) => {
    const name = repo.name;
    const url = repo.clone_url;
    const userName = localStorage.getItem("name")

    const res = await fetch("https://api.devpost.online/import-project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, url, userName
      })
    })


    const result = await res.json();
  };

  return (
    <div style={{ width: "100%", height: "auto", color: "white", margin: "3rem 3rem" }}>
      <div style={{ marginTop: "5rem" }}>
        <h2>My GitHub Repositories</h2>
        <ul>
          {repositories.map((repo) => (
            <li key={repo.id}>
              {repo.name}
              <button onClick={() => copyRepositoryLink(repo)}>Import</button>
            </li>
          ))}
        </ul>
        <h3>Current Page - {initalCountValue}</h3>
        <div>
          <h3 style={{ cursor: "pointer" }} onClick={() => { fetchData(initalCountValue - 1), setInitalCountValue(initalCountValue - 1) }}>Prev</h3>
          <h3 style={{ cursor: "pointer" }} onClick={() => { fetchData(initalCountValue + 1), setInitalCountValue(initalCountValue + 1) }}>Next</h3>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
