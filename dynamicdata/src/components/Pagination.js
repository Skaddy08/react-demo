import React from "react";

const Pagination = ({ page, onPageChange, hasNextPage }) => {
  const handlePrevClick = () => {
    onPageChange(page - 1);
  };

  const handleNextClick = () => {
    onPageChange(page + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevClick} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={handleNextClick} disabled={!hasNextPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
