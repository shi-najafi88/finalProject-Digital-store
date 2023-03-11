import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePagination } from "../../../hook";
import { FILTERDATACATEGORY } from "../../../redux/slices";
import { TrTabelModalOrderCheck, TrTableInventori, TrTableOrder, TrTableProduct } from "../../index";
import "./Table.scss";

export const Table = ({
  tableStatus,
  titleOne,
  titleTwo,
  titleThree,
  titleFour,
}) => {

  const state = useSelector(state => state.shopp);
  const dispatch = useDispatch();
  const [selectValue , setSelectValue] = useState('')
  const [headsetCategory , setHeadsetCategory] = useState([])
  const {currentPage, rowsPerPage, setTotalPages, renderPaginationButtons } = usePagination(1,5);


 // onchange select 
  const selectChange_handler = (event) => {

    axios.get(`http://localhost:3002/products?categoryname=${event.target.value}&_page=${currentPage}&_limit=${rowsPerPage}`)
    .then(res => dispatch(FILTERDATACATEGORY(res.data)))
    
    setSelectValue(event.target.value)
  }
console.log(state.dataCtegory);

  return (
    <>
      {tableStatus === "tableOrder" ? (
        <table className="table">
          <thead>
            <tr>
              <th>{titleOne}</th>
              <th>{titleTwo}</th>
              <th>{titleThree}</th>
              <th>{titleFour}</th>
            </tr>
          </thead>
          <tbody>
            
            {state.orderData.map(item => (
            <TrTableOrder item={item} />
            ))}

          </tbody>
        </table>
      ) : tableStatus === "tableInventori" ? (
        <table className="table">
          <thead>
            <tr>
              <th className="th_inventori">{titleOne}</th>
              <th className="th_inventori">{titleTwo}</th>
              <th className="th_inventori">{titleThree}</th>
            </tr>
          </thead>
          <tbody>
            
            { state.listData.map(item => (
            <TrTableInventori item={item} />
            ))}

          </tbody>
        </table>
      ) : tableStatus === "tableProduct" ? (
        <table className="table">
          <thead>
            <tr>
              <th>{titleOne}</th>
              <th>{titleTwo}</th>
              <th>
              {titleThree}
                <select onChange={selectChange_handler}>
                  <option className="optionTitle"value={'catagory'}></option>
                  <option value={'همه'}>همه</option>
                  <option value={'گوشی موبایل'}>گوشی موبایل</option>
                  <option value={'لپتاپ'}>لپتاپ</option>
                  <option value={'تبلت'}>تبلت</option>
                  <option value={'هدفون'}>هدفون</option>
                </select>
              </th>
              <th>{titleFour}</th>
            </tr>
          </thead>
          <tbody>

          { selectValue === 'همه' ? state.listData.map(item => (
            <TrTableProduct item={item} /> 
            )) :

              selectValue === 'گوشی موبایل' ? state.dataCtegory.map(item => (
              <TrTableProduct item={item} /> 
              )) :

              selectValue === 'لپتاپ' ? state.dataCtegory.map(item => (
              <TrTableProduct item={item} /> 
              )) :

              selectValue === 'تبلت' ? state.dataCtegory.map(item => (
              <TrTableProduct item={item} /> 
              )) :
                
              selectValue === 'هدفون' ? state.dataCtegory.map(item => (
              <TrTableProduct item={item} /> 
              )) :''
          }
          </tbody>
        </table>
      ) : tableStatus === "tableCheckOrder" ? (
        <table className="table tableCheckOrder">
          <thead>
            <tr>
              <th className="thOne">{titleOne}</th>
              <th>{titleTwo}</th>
              <th>{titleThree}</th>
            </tr>
          </thead>
          <tbody>

          { state.costomerData.map(item => (
            <TrTabelModalOrderCheck item={item.products} />
            ))}

          </tbody>
        </table>
      ):
      (
        ""
      )}
    </>
  );
};
