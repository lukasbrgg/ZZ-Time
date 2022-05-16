import React, {useRef, useState} from "react";
import styled from "styled-components";

import "./styles.css";

const Form = styled.form`
  margin-top: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4a4a4a;
  /* Change width of the form depending if the bar is opened or not */
  width: 601px;
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${(props) => (props.barOpened ? "auto" : "pointer")};
  height: 85px;
  border-radius: 15px;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Input = styled.input`
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: 50px;
  border: none;
  font-family: Jost, sans-serif;
  font-size: 40px;

  color: rgba(255, 255, 255, 0.34);
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    font-family: Jost, sans-serif;
    font-size: 40px;

    color: rgba(255, 255, 255, 0.34);
  }
`;

const SearchBar = ({sendDataToParent}) => {
    const [input, setInput] = useState("");
    const [barOpened, setBarOpened] = useState(true);
    const formRef = useRef();
    const inputFocus = useRef();

    const onFormSubmit = (e) => {
        // When form submited, clear input, close the searchbar and do something with input
        e.preventDefault();
        setInput("");
        setBarOpened(true);
        // After form submit, do what you want with the input value
        console.log(`Form was submited with input: ${input}`);
    };
    console.log(input);
    return (
        <div className="App">
            <Form
                barOpened={barOpened}
                onClick={() => {
                    // When form clicked, set state of baropened to true and focus the input
                    setBarOpened(true);
                    inputFocus.current.focus();
                }}
                // on focus open search bar
                onFocus={() => {
                    setBarOpened(true);
                    inputFocus.current.focus();
                }}
                // on blur close search bar
                onBlur={() => {
                    setBarOpened(true);
                }}
                // On submit, call the onFormSubmit function
                onSubmit={onFormSubmit}
                ref={formRef}
            >
                <Input
                    onChange={(e) => {
                        setInput(e.target.value)
                        sendDataToParent(e.target.value)
                    }}
                    ref={inputFocus}
                    value={input}
                    barOpened={barOpened}
                    placeholder="search project"
                />
            </Form>
        </div>
    );
};

export default SearchBar;
