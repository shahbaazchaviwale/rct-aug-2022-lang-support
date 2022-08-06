import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import { ArrowClockwise, Search } from "react-bootstrap-icons";

import CountryList from "./country_list";
import { useTranslation } from "react-i18next";
import { countryList } from "../../Services/country-list";
import "./localSearch.css"
const LocalSearch = () => {
  const { t } = useTranslation();

  const [query, setQuery] = useState("");

  const filterCountry = (query, countries) => {
    if (!query) {
      return countries;
    }
    // search data with lower & upper cases
    return countries.filter((country) =>
      country.counrtyName.toLowerCase().includes(query.toLowerCase())
    );
  };

  const countryArray = filterCountry(query, countryList);

  return (
    <Card>
      <Card.Body className="local_search_card">
        <Card.Title>{t("local_search.title")} <span style={{fontSize: "12px"}}>Items: {countryArray.length}</span></Card.Title>
       
        <InputGroup className="mb-3">
          <Form.Control
            placeholder={t("local_search.search_country")}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </InputGroup>

        {countryArray.length > 0 ? (
          <CountryList CountryLists={countryArray} />
        ) : (
          <p className="text-danger">
            {t("local_search.country_item_not_found")}
          </p>
        )}
      </Card.Body>
    </Card>
  );
};

export default LocalSearch;
