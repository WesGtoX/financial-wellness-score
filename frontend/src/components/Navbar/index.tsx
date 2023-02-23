import { NavbarContainer, Logo } from "./styles"

const Navbar = ({ logo }: NavbarProps) => {
  return (
    <NavbarContainer>
      <Logo src={logo} alt="Logo" />
    </NavbarContainer>
  )
}

type NavbarProps = {
  logo: string
}

export default Navbar
