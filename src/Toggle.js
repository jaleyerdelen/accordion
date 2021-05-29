import { Button, Accordion, Card } from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import data from "./data";
import { FaTrash, FaEdit } from "../node_modules/react-icons/fa";

function CustomToggle({ children, eventKey }) {


    const decoratedOnClick = useAccordionToggle(eventKey, () =>
        console.log("hello World")
    );

    return (
        <a>
            <button
                type="button"
                className="btns"
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        </a>
    );
}

function Toggle({ items, removeItem }) {
    console.log(items);
    return (
        <div>
            {items.map((data) => {
                const { ID, Name, Phone, City, parentID } = data;
                return (
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <CustomToggle eventKey="0">
                                    {ID}
                                </CustomToggle>
                                <button
                                    type="button"
                                    className="delete-btns"
                                    onClick={() => removeItem(ID)}
                                >
                                    <FaTrash /> </button>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>{City}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <CustomToggle eventKey="1"> {Phone} </CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>{Name}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                );
            })}
        </div>
    );
}


export default Toggle;
