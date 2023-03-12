import React from "react";
import { Container, MenuContainer, SLink, SLinkContainer } from "./styled";
import Flex from "../Flex";
import { nanoid } from "nanoid";
// icons
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import { ReactComponent as Dashboard } from "../../images/icons/dashboard.svg";
import { ReactComponent as Cards } from "../../images/icons/cards.svg";
import { ReactComponent as Product } from "../../images/icons/product.svg";
import { ReactComponent as WearTear } from "../../images/icons/wear-tear.svg";
import { ReactComponent as Games } from "../../images/icons/games.svg";
import { ReactComponent as Settings } from "../../images/icons/settings.svg";
import { useLocation } from "react-router-dom";

function LeftSidebar() {
  const { pathname } = useLocation();

  const menuArray = [
    {
      label: "Dashboard",
      icon: <Dashboard />,
      to: "/",
    },
    {
      label: "Cards",
      icon: <Cards />,
      to: "/cards",
    },
    {
      label: "Product",
      icon: <Product />,
      to: "/product",
    },
    {
      label: "WearTear",
      icon: <WearTear />,
      to: "/wear",
    },
    {
      label: "Games",
      icon: <Games />,
      to: "/games",
    },
    {
      label: "Settings",
      icon: <Settings />,
      to: "/settings",
    },
  ];

  return (
    <Container>
      <Flex column align="center">
        <LogoIcon />
        <MenuContainer>
          {menuArray.map((item) => {
            return (
              <SLinkContainer isActive={pathname === item.to} key={nanoid()}>
                <SLink to={item.to}>{item.icon}</SLink>
              </SLinkContainer>
            );
          })}
        </MenuContainer>
      </Flex>
    </Container>
  );
}

export default LeftSidebar;
