import React from "react";
import { CardStatisticContainer } from "../ui/CardStatistic.styled";
import Flex from "./Flex";

function CardStatistic() {
    return (
       <CardStatisticContainer>
            <Flex center>
        <div>icon</div>
        <Flex column center>
            <div>14</div>
            <div>IAM Users</div>
        </Flex>
            </Flex>
       </CardStatisticContainer>
    )
}

export default CardStatistic;