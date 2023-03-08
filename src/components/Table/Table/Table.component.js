import React from "react";
import { useSelector } from "react-redux";
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
            
            { state.orderData.map(item => (
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
              <th>{titleThree}</th>
              <th>{titleFour}</th>
            </tr>
          </thead>
          <tbody>

          { state.listData.map(item => (
            <TrTableProduct item={item} />
            ))}

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

          { state.orderData.map(item => (
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