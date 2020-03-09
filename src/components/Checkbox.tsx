import React from 'react';
import styled from 'styled-components';

interface IcheckboxText {
  title: string;
  connection: string;
}

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 1px;
  height: 1px;
  border: 0;
  opacity: 0;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  &:checked + label:before{
    content:'';
    width: 7px;
    height: 13px;
    border-style: solid;
    border-width: 2px 0 0 2px;
    border-color: #e55;
    transform: rotate(-145deg);
    position: absolute;
    box-sizing: border-box;
    left: 7px;
    top: 2px;
  }
`;

const CheckboxLabel = styled.label`
  display: inline-block;
  position: relative;
  padding-left: 26px;
  cursor: pointer;
  color: #666;
  box-sizing: border-box;
  line-height: 23px;
  font-size: 12px;
  &:after{
    content:'';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border: 1px solid #e55;
  }
`;

const CheckboxComponent = (props: IcheckboxText) => {
  const {
    title,
    connection
  } = props;
  return (
    <React.Fragment>
      <Checkbox id={connection} />
      <CheckboxLabel htmlFor={connection}>{title}</CheckboxLabel>
    </React.Fragment>
  );
};

export default CheckboxComponent;