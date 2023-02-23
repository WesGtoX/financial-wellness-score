import styled from "styled-components"
import { NumericFormat } from "react-number-format"

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-family: Work Sans;
  font-size: 0.875rem;
  color: #1e2a32;
  margin-bottom: 0.313rem;
`

export const InputContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 14.5rem;
  height: 3.5rem;
  padding: 0rem 0.75rem;
  border: 1px solid #e9eef2;
  border-radius: 0.25rem;
  background-color: #fff;
`

export const InputPrefix = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`

export const InputMask = styled(NumericFormat)`
  width: 100%;
  height: 90%;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  border: none;
  background-color: #fff;
  color: #4d6475;

  &:focus {
    outline: none;
    border-radius: none;
    box-shadow: none;
  }
`
