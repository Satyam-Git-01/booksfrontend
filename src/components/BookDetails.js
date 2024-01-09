import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Error from "./Error";
const BookDetails = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4600/books/${id}`)
      .then((response) => {
        console.log(response);
        setBook(response.data);
      })
      .catch((err) => {
      });
  }, [id]);
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <Link to={`/`}>
          <button
            type="button"
            className="text-white bg-red-600 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Home
          </button>
        </Link>
        <Link to={`/edit/${book._id}`}>
          <button
            type="button"
            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Edit
          </button>
        </Link>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Book Title : {book.title}
        </h5>
        <p className="font-normal text-white">Author Name : {book.author}</p>
        <p className="font-normal text-white">Genere: {book.genere}</p>
        <p className="font-normal text-white">
          Publication Date: {book.publicationDate}
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
