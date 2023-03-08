import { useState } from "react";
import './pagination.scss'

export const usePagination = (
    initialPage,
    initialRowsPerPage
    ) => {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);
    const [totalPages, setTotalPages] = useState(1);
    const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    };
    const renderPaginationButtons = () => {
    const pageButtons = [];
    for(let i=1 ; i< totalPages+1 ; i++){
       pageButtons.push(<button className={currentPage===i ?'active-btn':''} key={i}  onClick={()=> handlePageClick(i)}>{i}</button>)
    }
    return pageButtons
    }
    return{setTotalPages,currentPage,rowsPerPage,handlePageClick,renderPaginationButtons}
}