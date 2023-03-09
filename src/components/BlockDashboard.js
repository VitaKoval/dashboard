import React from "react";
import { BlockDashboardContainer } from "../ui/BlockDashboard.styled";

function BlockDashboard ({children, ...props}) {
    return (
        <BlockDashboardContainer {...props}>
            {children}
       </BlockDashboardContainer>

       
    )
}

export default BlockDashboard;