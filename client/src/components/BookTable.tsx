import React from "react";
import { Store, Authors, Book } from "../types";

interface BookTableProps {
  store: Store,
  authors: Authors,
  books: { [id: string]: Book },
}

const BookTable: React.FC<BookTableProps> = ({ store, authors, books }) => {
  const { relationship: { books: storeBooks } } = store;
  //Create an array of books that are available at the store
  const allBookInfo: Book[] = [];
  for (let i: number = 0; i < storeBooks.length; i++) {
    allBookInfo.push(books[storeBooks[i]]);
  };
  //Sort books by copies sold if store has more than one book
  if (allBookInfo.length > 1) allBookInfo.sort((a, b) => b.copiesSold - a.copiesSold);

  //Display only the top 2 best-selling books (or one if only one book is available at the store)
  const displayedBooks: React.ReactElement[] = [];
  for (let i: number = 0; i < 2; i++) {
    if (allBookInfo[i]) {
      displayedBooks.push(
        <tr key={i}>
          <td>{allBookInfo[i].name}</td>
          <td>{authors[allBookInfo[i].author]}</td>
        </tr>
      )
    };
  };

  return (
    <div className="book-table-container"> 
      <table className="book-table">
        <thead>
          <tr>
            <th colSpan={2}>Best-selling books</th>
          </tr>
        </thead>
        <tbody>
          {/* Conditional logic to display books or a message if no books are available */}
          {allBookInfo.length === 0 ? 
            <tr>
              <td colSpan={2}>No data available</td>
            </tr> : displayedBooks
          }
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;