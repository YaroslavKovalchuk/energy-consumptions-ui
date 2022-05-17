import React from "react";
import ReactPaginate from 'react-paginate';

const Pagination = (props) => {

    return (
        <ReactPaginate
            onPageChange={(pageNumber) => props.setPageSelected(pageNumber.selected)}
            pageRangeDisplayed={(props.totalPages < 5) ? props.totalPages : 5}
            pageCount={props.totalPages}
            breakLabel="..."
            nextLabel=" >"
            previousLabel="< "
            renderOnZeroPageCount={null}
            marginPagesDisplayed={2}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
        />
    )

}

export default Pagination;
