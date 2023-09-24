"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SimpleList = () => {
  let [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ text: "" });

  function removeTodo(id) {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewTodo({ [name]: value, id: todos.length + 1 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([newTodo, ...todos]);
    setNewTodo({ text: "" });
  };

  return (
    <div className="text-white space-y-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Text"
          className="bg-transparent border rounded-md px-3 py-2.5"
          value={newTodo.text}
          name="text"
          onChange={handleChange}
        />
        <button type="submit" className="border px-3 py-2.5 rounded-md ms-4">
          Add todo
        </button>
      </form>

      <ul>
        <AnimatePresence initial={false}>
          {todos.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden flex items-center gap-3"
            >
              <p> {todo.text}</p>
              <button onClick={() => removeTodo(todo.id)}>DELETE</button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default SimpleList;
