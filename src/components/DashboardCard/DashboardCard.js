import React from "react";
import { Container } from "./styled";

function DashboardCard ({children, ...props}) {
    return (
        <Container {...props}>
            {children}
       </Container>

       
    )
}

export default DashboardCard;