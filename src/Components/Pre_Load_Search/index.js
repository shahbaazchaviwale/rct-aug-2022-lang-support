import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import { useTranslation } from "react-i18next";
import EmailList from "./email_list";

const PreLoadSearch = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, SetSuggestions] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("https://reqres.in/api/users");
      console.log("res >>", response.data.data);
      setUsers(response.data.data);
    };
    loadUsers();
  }, []);

  const handlerChange = (value) => {
    let matches = [];

    if (value.length > 0) {
      matches = users.filter((user) => {
        const regrex = new RegExp(`${value}`, "gi");
        return user.email.match(regrex);
      });
    }
    console.log("sugg >>", matches);
    SetSuggestions(matches);
    setText(value);
  };

  const setTextOnTextBox = (email) => {
    setText(email);
    SetSuggestions([]);
    // console.log('setTextOnTextBox >>', email);

  }
  const clearText = () => {
    setText("");
  
  }
  return (
    <Card>
      <Card.Body className="local_search_card">
        <Card.Title>{t("pre_loaded_api_search.title")}</Card.Title>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder={t("pre_loaded_api_search.search_item")}
            aria-describedby="basic-addon2"
            onChange={(e) => {
              handlerChange(e.target.value);
            }}
            value={text}
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={() => clearText()}>
            Clear
          </Button> 
        </InputGroup>
        {suggestions && <EmailList list={suggestions} setTextOnTextBox={setTextOnTextBox} />}
      </Card.Body>
    </Card>
  );
};

export default PreLoadSearch;
