import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
const EmailList = ({ list, setTextOnTextBox }) => {
  // console.log('Country >>', CountryLists)

  return (
    <ListGroup>
      {list.map((item) => (
        <ListGroup.Item
          key={item.id}
          onClick={() => {
            setTextOnTextBox(item.email);
          }}
        >
          {item.email}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default EmailList;
