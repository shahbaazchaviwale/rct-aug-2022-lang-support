import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
const CountryList = ({ CountryLists, setTextOnTextBox }) => {
  // console.log('Country >>', CountryLists)

  return (
    <ListGroup>
      {CountryLists.map((item) => (
        <ListGroup.Item
          key={item.id}
          onClick={() => {
            setTextOnTextBox(item.counrtyName);
          }}
        >
          {item.counrtyName}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CountryList;
