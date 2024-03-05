import React from "react";
function Table({ table }) {
  const columns = table?.columns;
  const totalItems = table?.content?.length;
  const totalTables = Math.ceil(totalItems / columns);

  // Generate an array of JSX elements representing tables
  const tableElements = Array.from({ length: totalTables }, (_, index) =>
    generateTable(index, table, columns, totalItems)
  );

  // Render the array of table elements
  return <div>{tableElements}</div>;
}

// Generate an array of JSX elements representing tables
const generateTable = (index, table, columns, totalItems) => {
  const startIndex = index * columns;
  const endIndex = Math.min(startIndex + columns, totalItems);
  const tableItems = table.content.slice(startIndex, endIndex);

  return (
    <table key={index}>
      <thead>
        <tr>
          {tableItems.map((tableItem) => (
            <th key={tableItem.id}>
              <img src={tableItem.imageSrc} alt={tableItem.title} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {tableItems.map((tableItem) => (
            <td key={tableItem.id}>{tableItem.title}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
