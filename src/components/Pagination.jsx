import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, pageCount, currentPage }) => {
  return (
    <ReactPaginate
      className="pagination__root"
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
    />
  );
};

export default Pagination;
