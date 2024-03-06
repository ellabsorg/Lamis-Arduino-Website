import React from "react";
import "./rowsTable.css";

function RowsTable({ table }) {
  console.log("rows table", table);
  const rows = 1;
  const totalItems = table?.content?.length;
  console.log("totalItems", totalItems);
  const totalTables = Math.ceil(totalItems / rows);

  const tableElements = Array.from({ length: totalTables }, (_, index) =>
    generateTable(index, table, rows, totalItems)
  );

  // Render the array of table elements
  return <div>{tableElements}</div>;
}

// Generate an array of JSX elements representing tables
const generateTable = (index, table, rows, totalItems) => {
  const startIndex = index * rows;
  const endIndex = Math.min(startIndex + rows, totalItems);
  const tableItems = table.content.slice(startIndex, endIndex);

  return (
    <table key={index} className="rows-table">
      <tbody>
        {tableItems.map((tableItem) => (
          <tr>
            <td key={tableItem.id}>
              <img src={tableItem?.imageSrc} alt={tableItem?.title} />
            </td>

            <td key={tableItem.id}>
              {tableItem?.title && (
                <>
                  <strong>{tableItem?.title}</strong>
                  <br></br>
                </>
              )}
              {tableItem.position && (
                <>
                  <em>{tableItem?.position}</em>
                  <br></br>
                  <br></br>
                </>
              )}
              {tableItem?.description?.map((descp) => (
                <>
                  <p>{descp}</p>
                  <br></br>
                </>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RowsTable;
