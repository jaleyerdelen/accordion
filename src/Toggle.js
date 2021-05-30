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

function Toggle({ items, removeItem }) {
  return (
    <div>
      {items.map((data) => {
        const { ID, Name, Phone, City } = data;
        return (
          <Accordion key={data.ID}>
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
                  <p>Name: {Name}</p>
                  <p>City: {City}</p>
                  <p>Phone: {Phone}</p>
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
