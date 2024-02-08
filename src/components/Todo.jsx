// Todo.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { BsSearch, BsPlus } from "react-icons/bs";
import { addTodo, updateSearchTerm } from "../redux/actions";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="max-w-7xl mx-auto sm:mt-20 p-4 bg-gray-200 rounded-lg">
      <h2 className="mt-3 mb-6 text-3xl font-bold text-center uppercase">
        Add your Tasks here :-
      </h2>
      <div className="flex items-center p-3 mb-4 rounded-lg">
        <input
          id="addTodoInput"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded"
          type="text"
          placeholder="Add a Task"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 focus:outline-none "
          onClick={handleAddTodoClick}
        >
          <BsPlus size={20} />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButtons />
        <div className="flex items-center p-5">
          <form>
            <label className="mb-2 text-sm font-medium text-blue-400 sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="toDoSearch"
                className="block h-8 w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-blue-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Tasks"
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
      <TodoList />
    </div>
  );
};

export default Todo;
