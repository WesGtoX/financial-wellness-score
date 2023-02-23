import React from "react"

import CurrencyInput from "../CurrencyInput"

import * as S from "./styles"

import logoCircle from "../../assets/origin-logo-circle.svg"

const Card = () => {
  const [annualIncome, setIncome] = React.useState<string>("")
  const [monthlyCost, setMonthlyCost] = React.useState<string>("")
  const [resultScore, setResultScore] = React.useState<Score | undefined>()
  const [resultIsValid, setRResultIsValid] = React.useState<boolean>(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    fetch("http://127.0.0.1:8000/calculate-score", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        annual_income: annualIncome,
        monthly_costs: monthlyCost,
      }),
    })
      .then(response => {
        response.json().then(data => {
          setResultScore(data)
          setRResultIsValid(true)
        })
      })
      .catch(error => {
        console.error("Error:", error)
      })
  }

  const handleReturn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResultScore(undefined)
    setRResultIsValid(false)
  }

  return (
    <S.CardContainer>
      <S.CardHeader resultIsValid={resultIsValid}>
        <S.Logo src={logoCircle} />

        {resultIsValid && resultScore ? (
          <S.ResultBar>
            <S.ResultBarLevel
              status="healthy"
              currentStatus={resultScore.score}
              style={{ width: "100%", zIndex: 0 }}
            />
            <S.ResultBarLevel
              status="medium"
              currentStatus={resultScore.score}
              style={{ width: "66%", zIndex: 1 }}
            />
            <S.ResultBarLevel
              status="low"
              currentStatus={resultScore.score}
              style={{ width: "33%", zIndex: 2 }}
            />
          </S.ResultBar>
        ) : null}

        <S.CardInfo resultIsValid={resultIsValid}>
          <S.CardTitle>
            {!resultIsValid
              ? "Financial wellness test"
              : resultScore?.description}
          </S.CardTitle>
          {!resultIsValid ? (
            <S.CardSubTitle>
              Enter your financial information below
            </S.CardSubTitle>
          ) : (
            <S.CardResult>
              Your financial wellness score is{" "}
              <S.CardBoldResult>{resultScore?.status}</S.CardBoldResult>.
            </S.CardResult>
          )}
        </S.CardInfo>
      </S.CardHeader>

      <S.CardForm onSubmit={!resultIsValid ? handleSubmit : handleReturn}>
        {!resultIsValid ? (
          <S.CardInputContent>
            <CurrencyInput
              label="Annual annualIncome"
              value={annualIncome}
              onChange={e => setIncome(e)}
            />
            <CurrencyInput
              label="Monthly Costs"
              value={monthlyCost}
              onChange={e => setMonthlyCost(e)}
            />
          </S.CardInputContent>
        ) : null}

        <S.Button type="submit" resultIsValid={resultIsValid}>
          {!resultIsValid ? "Continue" : "Return"}
        </S.Button>
      </S.CardForm>
    </S.CardContainer>
  )
}

interface Score {
  score: "low" | "medium" | "healthy"
  status: "Unhealthy" | "Average" | "Healthy"
  description: string
}

export default Card
