import styled from "styled-components"
import { IResultBarLevelProps } from "../../types"
import { resultBarLevelBackground } from "../../utils"

export const CardContainer = styled.nav`
  width: 34rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 2px 10px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
`

export const CardHeader = styled.div<{ resultIsValid: boolean }>`
  display: flex;
  width: 100%;
  flex-direction: ${props => (!props.resultIsValid ? "row" : "column")};
  align-items: center;
  margin-bottom: 1.5rem;
`

export const Logo = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`

export const ResultBar = styled.div`
  position: relative;
  width: 27.75rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
`

export const ResultBarLevel = styled.div<IResultBarLevelProps>`
  position: absolute;
  height: 1.5rem;
  top: 0;
  left: 0;
  border: 0.125rem solid #fff;
  border-radius: 2rem;

  background-color: ${({ currentStatus, status }) => {
    return resultBarLevelBackground({ currentStatus, status })
  }};
`

export const CardInfo = styled.div<{ resultIsValid: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${props => (!props.resultIsValid ? "flex-start" : "center")};
`

export const CardTitle = styled.span`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  color: #1E2A32;
`

export const CardSubTitle = styled.span`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  color: #708797;
`

export const CardResult = styled.span`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  color: #4D6475;
`

export const CardBoldResult = styled.span`
  font-weight: 600;
`

export const CardForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CardInputContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const Button = styled.button<{ resultIsValid: boolean }>`
  width: 20rem;
  height: 3.5rem;
  border: 1px solid #e9eef2;
  border-radius: 2rem;
  border: 2px solid #001c95;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  background-color: ${props => (props.resultIsValid ? "#fff" : "#001C95")};
  color: ${props => (props.resultIsValid ? "#001C95" : "#fff")};
`
