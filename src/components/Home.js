import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const CONNECTION_STRING = process.env.REACT_APP_CONNECTION_STRING;
const Home = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const filteredBooks= books.filter((item)=>{
    return item.title.toLowerCase().includes(searchText.toLowerCase());
  })
  const fetchData = async () => {
    const result = await axios.get(CONNECTION_STRING);
    return await result.data;
  };
  const handleDelete = (id) => {
    axios
      .delete(`${CONNECTION_STRING}/${id}`)
      .then((response) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setLoading(true);
    fetchData().then((response) => {
      setBooks(response);
    });
    setLoading(false);
  }, [books]);
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <Link to={`/addNewBook`}>
          <button
            type="button"
            className="text-white bg-purple-800 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Add New Book
          </button>
        </Link>
        <div>
          <input
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            type="search"
            id="searchText"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Books Here..."
            required
          />
        </div>
      </div>
      {isLoading ? (
        <div className="text-white">Loading....</div>
      ) : (
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredBooks.map((book, index) => {
              return (
                <li key={index} className="py-3 sm:py-4">
                  <div className="flex flex-wrap items-center">
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                        {book.title}
                      </p>
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {book.author}
                      </p>
                    </div>
                    <div className="inline-flex flex-wrap items-center text-base font-semibold text-gray-900 dark:text-white">
                      <Link to={`/details/${book._id}`}>
                        <button
                          type="button"
                          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                          View
                        </button>
                      </Link>
                      <button
                        onClick={(e) => handleDelete(book._id)}
                        type="button"
                        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Delete
                      </button>
                      <Link to={`/edit/${book._id}`}>
                        <button
                          type="button"
                          className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                        >
                          Edit
                        </button>
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
