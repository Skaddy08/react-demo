import React from "react";

const RepoList = ({ repos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {repos.map((repo) => (
          <tr key={repo.id}>
            <td>{repo.name}</td>
            <td>{repo.description}</td>
            <td>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.html_url}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RepoList;
