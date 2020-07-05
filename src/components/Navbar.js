import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
// import {} from "react-icons";

const NavbarWrape = styled.nav`

`;

const Navbar = () => {
  return (
  	<>
      <ProductConsumer>
      	{value => {
      		const {sidebarState, cardState, cardItems} = value;
      		return <NavbarWrape>
      			Hello Nav - {cardItems}

      		</NavbarWrape>;


      	}}
      </ProductConsumer>
    </>

  	)
}

export default Navbar;