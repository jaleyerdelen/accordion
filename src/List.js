import React from "react";
import {  FaTrash } from "../node_modules/react-icons/fa";

const List = ({ items, removeItem }) => {
  return (
    <div className="grocery-list">
      {items.map((data) => {
        const { ID, Name } = data;
        return (
          <article key={ID} className="grocery-item">
            <p className="title">{Name}</p>
            <div className="btn-container">
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(ID)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
