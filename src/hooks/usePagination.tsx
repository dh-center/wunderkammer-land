import { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";

const usePagination = <T,>(items: T[], pageSize: number) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(items.length / pageSize);

  // splice items
  const page = useMemo(() => items.slice(currentPage * pageSize, (currentPage + 1) * pageSize), [items, currentPage, pageSize]);

  // drop page on items change
  useEffect(() => setCurrentPage(0), [items]);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const pagination = useMemo(
    () => (
      <ReactPaginate
        className="pagination__root"
        nextLabel=">"
        breakLabel="..."
        previousLabel="<"
        renderOnZeroPageCount={() => null}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        forcePage={currentPage}
        onPageChange={handlePageClick}
      />
    ),
    [currentPage, pageCount]
  );

  return { page, pagination };
};

export default usePagination;
