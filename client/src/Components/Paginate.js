import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
const Paginate = ({ pageCount, getOrders, getAllProducts }) => {
  const dispatch = useDispatch();
  const handlePageClick = (data) => {
    let nextPage = data.selected + 1;
    if (getOrders) {
      return dispatch(getOrders(nextPage));
    }
    if (getAllProducts) {
      return dispatch(getAllProducts(nextPage));
    }
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={handlePageClick}
      marginPagesDisplayed={3}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="Prev"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default Paginate;
