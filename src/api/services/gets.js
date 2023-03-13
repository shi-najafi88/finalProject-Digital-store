import axios from "axios"

export const getAllProducts = (currentPage,rowsPerPage) => {
    axios.get(`http://localhost:3002/products?_page=${currentPage}&_limit=${rowsPerPage}`)
    
}