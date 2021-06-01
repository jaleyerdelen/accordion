import React, { useState, useEffect } from "react";
import { Accordion, Card } from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import { FaTrash } from "../node_modules/react-icons/fa";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log("Hello World")
  );

  return (
    <a href>
      <button type="button" className="btns" onClick={decoratedOnClick}>
        {children}
      </button>
    </a>
  );
}

function Toggle({ items, removeItem, ID, nest }) {
  return (
    <div>
      {items.map((data) => {
        const { ID, Name, Phone, City, parentID } = data;
        return (
          <Accordion key={ID}>
            <Card>
              <Card.Header>
                <CustomToggle eventKey="0">{parentID}</CustomToggle>
                <button
                  type="button"
                  className="delete-btns"
                  onClick={() => removeItem(ID)}
                >
                  <FaTrash />
                </button>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ul>
                    <li> {ID} </li>
                    <li> {City} </li>
                    <li> {Phone} </li>
                  </ul>
                  <ul>
                    <li>{ID}</li>
                    <li>{City}</li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        );
      })}
    </div>
  );
}

export default Toggle;
