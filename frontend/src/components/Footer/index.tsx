import { FooterContainer, LockIcon, Info } from "./styles"
import lock from "../../assets/lock-system.svg"

const Footer = () => {
  return (
    <FooterContainer>
      <LockIcon src={lock} />
      <Info>
        Your financial information is encrypted and secure. We'll never share or
        sell any of your personal data.
      </Info>
    </FooterContainer>
  )
}

export default Footer
