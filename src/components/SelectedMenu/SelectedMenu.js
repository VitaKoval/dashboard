import React from "react";
import { Container } from "./styled";

function SelectedMenu({ isOpenSelectMenu, width, children }) {
  return (
    <Container isOpen={isOpenSelectMenu} width={width}>
      {children}
    </Container>
  );
}

export default SelectedMenu;
