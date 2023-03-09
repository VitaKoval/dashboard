import React, { useContext } from "react";
import CardStatistic from "./CardStatistic";
import Flex from "./Flex";
import Wrapper from "./Wrapper";
import DashboardContext from "../context/DashboardContext";
// icons
import { ReactComponent as User } from "../images/icons/user.svg";
import { ReactComponent as Setting } from "../images/icons/setting.svg";
import { ReactComponent as Keyhole } from "../images/icons/keyhole.svg";
import { ReactComponent as Share } from "../images/icons/share.svg";
import { ReactComponent as Game } from "../images/icons/game.svg";

function Statistic() {
  const { data, error, loading } = useContext(DashboardContext);

  console.log("data", data);
  console.log(loading);

  return (
    <Wrapper box>
      <Flex>
        <CardStatistic
          icon={<User />}
          color="green"
          statistic={data && data.statistic.iam_users}
        >
          IAM Users
        </CardStatistic>
        <CardStatistic
          icon={<Setting />}
          color="blue"
          statistic={data && data.statistic.iam_roles}
        >
          IAM Roles
        </CardStatistic>
        <CardStatistic
          icon={<Keyhole />}
          color="red"
          statistic={data && data.statistic.iam_policies}
        >
          IAM Policies
        </CardStatistic>
        <CardStatistic
          icon={<Share />}
          color="orange"
          statistic={data && data.statistic.compute_resources}
        >
          Compute Resources
        </CardStatistic>
        <CardStatistic
          icon={<Game />}
          color="violet"
          statistic={data && data.statistic.games}
        >
          Games
        </CardStatistic>
      </Flex>
    </Wrapper>
  );
}

export default Statistic;
