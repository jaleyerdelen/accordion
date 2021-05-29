import React, { useState } from "react";
import { FaTrash, FaEdit } from "../node_modules/react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "../node_modules/react-icons/ai";
const List = ({ items, removeItem }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="grocery-list">
      {items.map((data) => {
        const { ID, Name, Phone, City } = data;
        return (
          <article key={ID} className="grocery-item">
            <div className="column">
              <p className="title">{ID}</p>
              <div className="btn-container">
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => removeItem(ID)}
                >
                  <FaTrash />
                </button>

                <button
                  className="edit-btn"
                  onClick={() => setShowInfo(!showInfo)}
                >
                  {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
              </div>
            </div>
            <div className="info">
              {showInfo && <p>Name: {Name}</p>}
              {showInfo && <p>City: {City}</p>}
              {showInfo && <p>Phone: {Phone}</p>}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
