import React from "react";
import { TrTableInventori, TrTableOrder } from "../../index";
import "./Table.scss";

export const Table = ({
  tableStatus,
  titleOne,
  titleTwo,
  titleThree,
  titleFour,
}) => {
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
            <TrTableOrder />

            {/* {todoData.map((item) => (
        <TodoTr item={item} />
      ))} */}
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
            <TrTableInventori />

            {/* {todoData.map((item) => (
      <TodoTr item={item} />
    ))} */}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </>
  );
};
