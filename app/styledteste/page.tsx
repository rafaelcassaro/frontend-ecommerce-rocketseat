"use client"

import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

const Button = styled.button`
  display: inline-block;
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;


const Input = styled.input.attrs({ type: "checkbox" })``;

const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`

const LabelText = styled.span`
  ${(props) => {
        switch (props.$mode) {
            case "dark":
                return css`
          background-color: black;
          color: white;
          ${Input}:checked + && {
            color: blue;
          }
        `;
            default:
                return css`
          background-color: white;
          color: black;
          ${Input}:checked + && {
            color: red;
          }
        `;
        }
    }}
`;


export default function Page() {
    const teste = "dark"

    return (
        <>
            <p>alou</p>
            <Button>Normal Button</Button>
            <Button as="a" href="#">Link with Button styles</Button>
            <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>


            <Label>
                <Input defaultChecked />
                <LabelText>Foo</LabelText>
            </Label>
            <Label>
                <Input />
                <LabelText $mode={teste}>Foo</LabelText>
            </Label>
            <Label>
                <Input defaultChecked />
                <LabelText>Foo</LabelText>
            </Label>
            <Label>
                <Input defaultChecked />
                <LabelText $mode={teste}>Foo</LabelText>
            </Label>
            <h1>Teste</h1>
            <h2>Teste</h2>
            <h3>Teste</h3>
        </>
    )
}