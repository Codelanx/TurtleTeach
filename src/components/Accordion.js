import {Card, CardHeader, Collapse} from "reactstrap";


function AccordionCategory(props) {
    return (
        <Card>
            <CardHeader>

            </CardHeader>
            <Collapse isOpen={props.open}>

            </Collapse>
        </Card>
    );
}

function Accordion(props) {
    return (
        <div className={"accordion"}>
            {props.children}
        </div>
    );
}

export default Accordion;