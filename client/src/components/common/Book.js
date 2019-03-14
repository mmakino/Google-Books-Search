import React from 'react';
import "./Book.css";

//
// Common component for Search(ed) and Saved book 
// to render a single book
//
// * customize Save or Delete button depending on the page/route
//   through props.buttonName
//
export default function Book(props) {
  const book = props.book;

  return (
    <div className="container book-info mt-2">
      <div className="row">
        <div className="col-9">
          <h3>{book.title}</h3>
          <h4>{("subtitle" in book) ? book.subtitle : ""}</h4>
          <h5>Written by {(book.authors) ? book.authors.join(", ") : ""}</h5>
        </div>
        <div className="col-3 m-0">
          <a href={book.link} rel="noopener noreferrer" target="_blank">
            <button className="btn btn-primary mr-1 mt-1">View</button>
          </a>
          <button
            className="btn btn-primary mt-1"
            onClick={props.onClick}>
            {props.buttonName}
          </button>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col-3">
          <img
            src={book.image}
            alt=""
            className="img-fluid rounded float-left m-2 book-image"
          />
        </div>
        <div className="col-9">
          <p>
            {book.description}
          </p>
        </div>
      </div>
    </div>
  );
}
