import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const AddNewBook = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genere, setGenere] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const notify = () => toast("Wow so easy!");
  const handleSubmit = (e) => {
    if (title.length <= 3) {
      notify()
    }
    if (author.length === 0) {
    }
    if (genere.length === 0) {
    }
    if (publicationDate.length === 0) {
    }
    const book = {
      title: title,
      author: author,
      genere: genere,
      publicationDate: publicationDate,
    };
    e.preventDefault();
    axios
      .post("http://localhost:4600/books", book)
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
      <form
        class="max-w-sm mx-auto"
        method="post"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div class="mb-5">
          <label
            for="title"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Book Title:
          </label>
          <input
            type="text"
            id="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Book Author:
          </label>
          <input
            value={author}
            type="text"
            id="author"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Genere:
          </label>
          <input
            value={genere}
            type="text"
            id="author"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setGenere(e.target.value)}
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="publicationDate"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Published Date:
          </label>
          <input
            value={publicationDate}
            type="date"
            id="publicationDate"
            class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setPublicationDate(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default AddNewBook;
