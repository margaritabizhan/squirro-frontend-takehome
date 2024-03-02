import React from "react";

const BookTable: React.FC = () => {
  return (
    <div className="book-table-container"> 
      <table className="book-table">
        <thead>
          <tr>
            <th colSpan={2}>Book Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Book 1</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Book 2</td>
            <td>200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;