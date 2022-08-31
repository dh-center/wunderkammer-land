import React, { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";

const ClientPagination = ({ items, render, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(items.length / pageSize);

  // splice items
  const paginated = useMemo(
    () => items.slice(currentPage * pageSize, (currentPage + 1) * pageSize),
    [items, currentPage, pageSize]
  );

  // drop page on items change
  useEffect(() => setCurrentPage(0), [items]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <>
      {render(paginated)}
      <ReactPaginate
        className="pagination__root"
        nextLabel=">"
        breakLabel="..."
        previousLabel="<"
        renderOnZeroPageCount={null}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        forcePage={currentPage}
        onPageChange={handlePageClick}
      />
    </>
  );
};

export default ClientPagination;
