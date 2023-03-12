import React, { useContext } from "react";
import DashboardContext from "../../context/DashboardContext";
import { TableCell, Image, TableRow } from "./styled";
import Flex from "../Flex";
import CardHeader from "../CardHeader/CardHeader";
import SelectFilterTableSettings from "../SelectFilterTableSettings";
// icons
import { ReactComponent as SettingLight } from "../../images/icons/setting-light.svg";
import { ReactComponent as ActionMenu } from "../../images/icons/action-menu.svg";

function DashboardGeneralSalesTable() {
  const { data, error, loading } = useContext(DashboardContext);

  return (
    <>
      <CardHeader
        title="General Sales / Time"
        selectedFilterValue="Table settings"
        icon={<SettingLight />}
      >
        <SelectFilterTableSettings />
      </CardHeader>
      <TableRow header>
        <TableCell flexGrow={3}>Card model</TableCell>
        <TableCell flexGrow={3}>Card name</TableCell>
        <TableCell flexGrow={1}>Type</TableCell>
        <TableCell flexGrow={1} center>
          Limited
        </TableCell>
        <TableCell flexGrow={1} center>
          № Operations
        </TableCell>
        <TableCell flexGrow={1.5}>Date of lost operations</TableCell>
        <TableCell flexGrow={1} center>
          Rating
        </TableCell>
        <TableCell flexGrow={1}>Status</TableCell>
        <TableCell flexGrow={1} center>
          Price
        </TableCell>
        <TableCell flexGrow={1} center>
          Options
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
                    <Image />
                    <Flex column>
                      <p style={{ maxWidth: "113px" }}>{model.name}</p>
                    </Flex>
                  </Flex>
                </TableCell>
                <TableCell flexGrow={3}>
                  <p>{card_name}</p>
                  <p>Card {card_number}</p>
                </TableCell>
                <TableCell flexGrow={1}>{type}</TableCell>
                <TableCell flexGrow={1} center>
                  {limited}
                </TableCell>
                <TableCell flexGrow={1} center>
                  {operations}
                </TableCell>
                <TableCell flexGrow={1.5}>{date}</TableCell>
                <TableCell flexGrow={1} center>
                  {rating}
                </TableCell>
                <TableCell flexGrow={1}>{status}</TableCell>
                <TableCell flexGrow={1} center>
                  {price}
                </TableCell>
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
