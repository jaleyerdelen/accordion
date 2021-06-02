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
                    <li> {ID} </li>
                    <li> {City} </li>
                    <li> {Phone} </li>
                  </ul>

                  {el.children.length > 0 &&
                    el.children.map((item) => {
                      const { ID, Phone, City, Name } = item;
                      return (
                        <ul>
                          <li>{Phone}</li>
                        </ul>
                      );
                    })}
                  <Card>
                    <Card.Header>
                      <CustomToggle
                        eventKey="1"
                        onClick={() =>
                          (CustomToggle.eventKey = "1"
                            ? (CustomToggle.eventKey = "0")
                            : (CustomToggle.eventKey = "1"))
                        }
                      >
                        Click me!
                      </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse
                      eventKey="1"
                      onClick={() =>
                        (Accordion.eventKey = "1"
                          ? (Accordion.eventKey = "0")
                          : (Accordion.eventKey = "1"))
                      }
                    >
                      <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                  </Card>
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
