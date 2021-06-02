import React, { useState, useEffect } from "react";
import { Accordion, Card } from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import { FaTrash } from "../node_modules/react-icons/fa";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () => {});

  return (
    <a href>
      <button type="button" className="btns" onClick={decoratedOnClick}>
        {children}
      </button>
    </a>
  );
}

function Toggle({ items, removeItem }) {
  const [btnCheck, setBtnCheck] = useState(true);
  console.log(items);
  return (
    <div>
      {items.map((el) => {
        const { ID, Name, Phone, City } = el;

        return (
          <Accordion key={ID}>
            <Card>
              <Card.Header>
                <CustomToggle eventKey="0">{ID}</CustomToggle>
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
                    <li>
                      <b>Name:</b> {Name}
                    </li>
                    <li>
                      <b>City:</b> {City}
                    </li>
                    <li>
                      <b>ID:</b> {ID}
                    </li>
                    <li>
                      <b>Phone:</b> {Phone}
                    </li>
                    {el.children.length > 0 &&
                      el.children.map((item) => {
                        const { ID, Phone, City, Name, parentID } = item;
                        return (
                          <ul
                            type="button"
                            id={ID}
                            className="box"
                            onClick={() => {
                              setBtnCheck(!btnCheck);
                            }}
                          >
                            <b>parentID:</b> {parentID}
                            <li>
                              <b>Name: </b> {btnCheck ? Name : ""}
                            </li>
                            <li>
                              <b>City: </b>
                              {btnCheck ? City : ""}
                            </li>
                            <li>
                              <b>ID:</b> {btnCheck ? ID : ""}
                            </li>
                            <li>
                              <b>Phone:</b> {btnCheck ? Phone : ""}
                            </li>
                          </ul>
                        );
                      })}
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
