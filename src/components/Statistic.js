import React from "react";
import CardStatistic from "./CardStatistic";
import Flex from "./Flex";
import Wrapper from "./Wrapper";
import { ReactComponent as User } from "../images/icons/user.svg";
import { ReactComponent as Setting } from '../images/icons/setting.svg';
import { ReactComponent as Keyhole } from '../images/icons/keyhole.svg'
import { ReactComponent as Share } from '../images/icons/share.svg';
import { ReactComponent as Game } from '../images/icons/game.svg';

function Statistic() {
  return (
    <Wrapper box>
      <Flex>
              <CardStatistic icon={<User/> } color='green'>IAM Users</CardStatistic>
              <CardStatistic icon={<Setting/>} color='blue'>IAM Roles</CardStatistic>
              <CardStatistic icon={<Keyhole/>} color='red'>IAM Policies</CardStatistic>
              <CardStatistic icon={<Share/>} color='orange'>Compute Resources</CardStatistic>
              <CardStatistic icon={<Game/>} color='violet'>Games</CardStatistic>
      </Flex>
    </Wrapper>
  );
}

export default Statistic;
