import React, { useContext } from "react";
import Flex from "../Flex";
import DaschboardCardStatistics from "../DaschboardCardStatistics/DaschboardCardStatistics";
import DashboardContext from "../../context/DashboardContext";

// icons
import { ReactComponent as User } from "../../images/icons/user.svg";
import { ReactComponent as Setting } from "../../images/icons/setting.svg";
import { ReactComponent as Keyhole } from "../../images/icons/keyhole.svg";
import { ReactComponent as Share } from "../../images/icons/share.svg";
import { ReactComponent as Game } from "../../images/icons/game.svg";

function DashboardStatistics() {
  const { data, error, loading } = useContext(DashboardContext);

  return (
    <Flex>
      <DaschboardCardStatistics
        icon={<User />}
        color="green"
        statistic={!loading && data.statistic.iam_users}
      >
        IAM Users
      </DaschboardCardStatistics>
      <DaschboardCardStatistics
        icon={<Setting />}
        color="blue"
        statistic={!loading && data.statistic.iam_roles}
      >
        IAM Roles
      </DaschboardCardStatistics>
      <DaschboardCardStatistics
        icon={<Keyhole />}
        color="red"
        statistic={!loading && data.statistic.iam_policies}
      >
        IAM Policies
      </DaschboardCardStatistics>
      <DaschboardCardStatistics
        icon={<Share />}
        color="orange"
        statistic={!loading && data.statistic.compute_resources}
      >
        Compute Resources
      </DaschboardCardStatistics>
      <DaschboardCardStatistics
        icon={<Game />}
        color="violet"
        statistic={!loading && data.statistic.games}
      >
        Games
      </DaschboardCardStatistics>
    </Flex>
  );
}

export default DashboardStatistics;
