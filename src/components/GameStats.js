import React from "react";
import { GameStatsContainer, GameStatsLocationContainer } from "../ui/GameStats.styled";
import Flex from "./Flex";
import LineChart from "./LineChart";
import TopBlock from "./TopBlock";
import Wrapper from "./Wrapper";

function GameStats() {
  return (
    <Wrapper box>
      <Flex>
          
        <GameStatsContainer>
          <LineChart/>
        </GameStatsContainer>
        <GameStatsLocationContainer>
                  <TopBlock title='Game Stats' text='Location' chois='Naperville' />
                  <Flex align='center' justify='center'>
                     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading...</div>
                  </Flex>
        </GameStatsLocationContainer>
      </Flex>
    </Wrapper>
  );
}

export default GameStats;
