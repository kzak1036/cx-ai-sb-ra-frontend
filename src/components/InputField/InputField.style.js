import styled from "styled-components";

export const Label = styled.label`
  //display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
`;

export const StyledInput = styled.input`
  //width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
    margin-bottom: 25px;
`;
