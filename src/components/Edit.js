import React, { useEffect, useState } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genere, setGenere] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4600/books/${id}`)
      .then((response) => {
        console.log(response);
        const { title, author, genere, publicationDate } = response.data;
        setTitle(title);
        setAuthor(author);
        setGenere(genere);
        setPublicationDate(publicationDate);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const handleSubmit = (e) => {
    const book = {
      title: title,
      author: author,
      genere: genere,
      publicationDate: publicationDate,
    };
    e.preventDefault();
    axios
      .put(`http://localhost:4600/books/${id}`, book)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <Link to={`/`}>
          <button
            type="button"
            className="text-white bg-red-600 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Home
          </button>
        </Link>
      <form
        className="max-w-sm mx-auto"
        method="post"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Book Title:
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Book Author:
          </label>
          <input
            value={author}
            type="text"
            id="author"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Genere:
          </label>
          <input
            value={genere}
            type="text"
            id="author"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setGenere(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="publicationDate"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Published Date:
          </label>
          <input
            value={publicationDate}
            type="date"
            id="publicationDate"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setPublicationDate(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Edit;
