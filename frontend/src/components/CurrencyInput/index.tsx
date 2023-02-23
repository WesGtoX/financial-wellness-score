import React from "react"

import * as S from "./styles"

import dollarSign from "../../assets/dollar-sign.svg"

const positiveNumbersValidation = (e: React.FormEvent<HTMLInputElement>) => {
  return (e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ""))
}

const CurrencyInput = ({ label, value, onChange }: CurrencyInputProps) => {
  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.InputContent>
        <S.InputPrefix src={dollarSign} />
        <S.InputMask
          type="text"
          value={value}
          placeholder="0"
          thousandSeparator=","
          valueIsNumericString
          required
          min="0"
          onInput={e => positiveNumbersValidation(e)}
          onValueChange={values => {
            onChange(values.value)
          }}
        />
      </S.InputContent>
    </S.InputContainer>
  )
}

type CurrencyInputProps = {
  label: string
  value: string
  onChange: (value: string) => void
}

export default CurrencyInput
