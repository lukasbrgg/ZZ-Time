import React, {useRef, useState} from "react";
import styled from "styled-components";

import "./styles.css";

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  -webkit-box-shadow: 3px 0px 14px 1px rgba(0, 0, 0, 0.16);
  box-shadow: 3px 0px 14px 1px rgba(0, 0, 0, 0.16);
  justify-content: center;
  background-color: #272727;
  /* Change width of the form depending if the bar is opened or not */
  width: 602px;
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${(props) => (props.barOpened ? "auto" : "pointer")};
  height: 106px;
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

  color: rgba(255, 255, 255, 0.61);
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    font-family: Jost, sans-serif;
    font-size: 40px;

    color: rgba(255, 255, 255, 0.61);
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
                        sendDataToParent(e.target.value);

                    }}
                    ref={inputFocus}
                    value={input}
                    barOpened={barOpened}
                    placeholder="project name"
                />
            </Form>
        </div>
    );
};

export default SearchBar;
