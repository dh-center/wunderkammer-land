import React, { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import { cardType } from "../containers/CollectionViewerContainer";

type handlePageClickType = {
  selected: number;
};

interface ClientPaginationProps {
  pageSize: number;
  items: cardType[];
  render: (paginated: cardType[]) => React.ReactElement;
}

const ClientPagination: React.FC<ClientPaginationProps> = ({ items, render, pageSize }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const pageCount = Math.ceil(items.length / pageSize);

  // splice items
  const paginated = useMemo(
    () => items.slice(currentPage * pageSize, (currentPage + 1) * pageSize),
    [items, currentPage, pageSize]
  );

  // drop page on items change
  useEffect(() => setCurrentPage(0), [items]);

  const handlePageClick = (event: handlePageClickType) => {
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
        renderOnZeroPageCount={() => null}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        forcePage={currentPage}
        onPageChange={handlePageClick}
      />
    </>
  );
};

export default ClientPagination;
