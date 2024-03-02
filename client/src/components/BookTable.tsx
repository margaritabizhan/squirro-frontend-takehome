import React from "react";
import { Store, Authors, Book } from "../types";

interface BookTableProps {
  store: Store,
  authors: Authors,
  books: { [id: string]: Book },
}

const BookTable: React.FC<BookTableProps> = ({ store, authors, books }) => {

  

  return (
    <div className="book-table-container"> 
      <table className="book-table">
        <thead>
          <tr>
            <th colSpan={2}>Best-selling books</th>
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