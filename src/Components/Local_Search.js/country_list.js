import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
const CountryList = ({ CountryLists, addCountryName }) => {
  // console.log('Country >>', CountryLists)

  return (
    <ListGroup>
      {CountryLists.map((item) => (
        <ListGroup.Item key={item.id}>{item.counrtyName}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CountryList;
