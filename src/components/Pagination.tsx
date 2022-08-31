import React from "react";
import ReactPaginate from "react-paginate";
import { HandlePageClickType } from "../pages/CollectionDetailed";

type PaginationProps = {
  handlePageClick: (event: HandlePageClickType) => void,
  pageCount: number,
}

const Pagination: React.FC<PaginationProps> = ({ handlePageClick, pageCount }) => {
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
