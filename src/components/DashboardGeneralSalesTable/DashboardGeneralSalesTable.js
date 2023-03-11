import React, { useContext, useEffect, useState } from "react";
import DashboardContext from "../../context/DashboardContext";

import {
  Table,
  TableCell,
  Image,
  TableColumn,
  TableHeader,
  TableRow,
} from "./styled";

// icons
import { ReactComponent as SettingLight } from "../../images/icons/setting-light.svg";
import { ReactComponent as ActionMenu } from "../../images/icons/action-menu.svg";
import Flex from "../Flex";
import CardHeader from "../CardHeader/CardHeader";

function DashboardGeneralSalesTable() {
  const { data, error, loading } = useContext(DashboardContext);

  return (
    <>
      <CardHeader
        title="General Sales / Time"
        selectedFilterValue="Table settings"
        icon={<SettingLight />}
      />
      <TableRow header>
        <TableCell flexGrow={3}>Card model</TableCell>
        <TableCell flexGrow={3} >Card name</TableCell>
        <TableCell flexGrow={1} >Type</TableCell>
        <TableCell flexGrow={1} center >Limited</TableCell>
        <TableCell flexGrow={1} center >№ Operations</TableCell>
        <TableCell flexGrow={1.5} >Date of lost operations</TableCell>
        <TableCell flexGrow={1} center>Rating</TableCell>
        <TableCell flexGrow={1} >Status</TableCell>
        <TableCell flexGrow={1} center >Price</TableCell>
        <TableCell flexGrow={1} center >Options</TableCell>
      </TableRow>
      <TableRow>
                <TableCell flexGrow={3}>
                  <Flex>
                    <Image/>
                    <Flex column>
                      <p style={{ maxWidth: '113px' }}>Pokemon Traidinng  Card Game</p>
                    </Flex>
                  </Flex>
                </TableCell>
                <TableCell flexGrow={3} ><p>Charizard Vmax 330</p><p>Card #5</p></TableCell>
                <TableCell flexGrow={1} >Amet minim</TableCell>
                <TableCell flexGrow={1} center >4</TableCell>
                <TableCell flexGrow={1} center >14</TableCell>
                <TableCell flexGrow={1.5} >October 24, 2018</TableCell>
                <TableCell flexGrow={1} center >96%</TableCell>
                <TableCell flexGrow={1} >9 out of 10 </TableCell>
                <TableCell flexGrow={1} center >$840</TableCell>
                <TableCell flexGrow={1} center>
                  <ActionMenu />
                </TableCell>
      </TableRow>
      <TableRow>
                <TableCell flexGrow={3}>
                  <Flex>
                    <Image/>
                    <Flex column>
                      <p style={{ maxWidth: '113px' }}>Pokemon Traidinng  Card Game</p>
                    </Flex>
                  </Flex>
                </TableCell>
                <TableCell flexGrow={3} ><p>Charizard Vmax 330</p><p>Card #5</p></TableCell>
                <TableCell flexGrow={1} >Amet minim</TableCell>
                <TableCell flexGrow={1} center >4</TableCell>
                <TableCell flexGrow={1} center >14</TableCell>
                <TableCell flexGrow={1.5} >October 24, 2018</TableCell>
                <TableCell flexGrow={1} center >96%</TableCell>
                <TableCell flexGrow={1} >9 out of 10 </TableCell>
                <TableCell flexGrow={1} center >$840</TableCell>
                <TableCell flexGrow={1} center>
                  <ActionMenu />
                </TableCell>
      </TableRow>
      <TableRow>
                <TableCell flexGrow={3}>
                  <Flex>
                    <Image/>
                    <Flex column>
                      <p style={{ maxWidth: '113px' }}>Pokemon Traidinng  Card Game</p>
                    </Flex>
                  </Flex>
                </TableCell>
                <TableCell flexGrow={3} ><p>Charizard Vmax 330</p><p>Card #5</p></TableCell>
                <TableCell flexGrow={1} >Amet minim</TableCell>
                <TableCell flexGrow={1} center >4</TableCell>
                <TableCell flexGrow={1} center >14</TableCell>
                <TableCell flexGrow={1.5} >October 24, 2018</TableCell>
                <TableCell flexGrow={1} center >96%</TableCell>
                <TableCell flexGrow={1} >9 out of 10 </TableCell>
                <TableCell flexGrow={1} center >$840</TableCell>
                <TableCell flexGrow={1} center>
                  <ActionMenu />
                </TableCell>
      </TableRow>
      {!loading &&
        data.general_sales_time.map(
          ({
            card_name,
            card_number,
            date,
            limited,
            model,
            operations,
            price,
            rating,
            status,
            type,
          }) => {
            return (
              <TableRow key={card_number}>
                <TableCell flexGrow={3}>
                  <Flex>
                    <Image/>
                    <Flex column>
                      <p style={{ maxWidth: '113px' }}>{model.name}</p>
                    </Flex>
                  </Flex>
                </TableCell>
                <TableCell flexGrow={3} ><p>{card_name}</p><p>Card {card_number}</p></TableCell>
                <TableCell flexGrow={1} >{type}</TableCell>
                <TableCell flexGrow={1} center >{ limited}</TableCell>
                <TableCell flexGrow={1} center >{operations}</TableCell>
                <TableCell flexGrow={1.5} >{ date}</TableCell>
                <TableCell flexGrow={1} center >{rating}</TableCell>
                <TableCell flexGrow={1} >{ status}</TableCell>
                <TableCell flexGrow={1} center >{ price}</TableCell>
                <TableCell flexGrow={1} center>
                  <ActionMenu />
                </TableCell>
              </TableRow>
            );
          }
        )}
    </>
  );
}

export default DashboardGeneralSalesTable;
