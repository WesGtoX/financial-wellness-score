import * as S from "./App.styles"

import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Footer from "./components/Footer"
import logo from "./assets/origin-logo.svg"

const App = () => {
  return (
    <S.AppContainer>
      <Navbar logo={logo} />
      <S.AppTitle>
        Let's find out your{" "}
        <S.AppBoldTitle>financial wellness score.</S.AppBoldTitle>
      </S.AppTitle>
      <Card />
      <Footer />
    </S.AppContainer>
  )
}

export default App
