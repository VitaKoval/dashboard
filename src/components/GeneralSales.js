import React from "react";
import {
  GeneralSalesContainer,
  Table,
  TableBody,
  TableHeadCell,
  TableHeader,
  TableRow,
  Td,
  Th,
  Tr,
} from "../ui/GeneralSales.styled";
import TopBlock from "./TopBlock";
import Wrapper from "./Wrapper";
// icons
import { ReactComponent as SettingLight } from "../images/icons/setting-light.svg";
import Flex from "./Flex";

function GeneralSales() {
  return (
    <>
      <TopBlock
        title="General Sales / Time"
        choice="Table settings"
        icon={<SettingLight />}
      />
      <Flex>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeadCell>Card model</TableHeadCell>
              <TableHeadCell>Card name</TableHeadCell>
              <TableHeadCell>Type</TableHeadCell>
              <TableHeadCell>Limited</TableHeadCell>
              <TableHeadCell>№ Operations</TableHeadCell>
              <TableHeadCell>Date of lost operations</TableHeadCell>
              <TableHeadCell>Rating</TableHeadCell>
              <TableHeadCell>Status</TableHeadCell>
              <TableHeadCell>Price</TableHeadCell>
              <TableHeadCell>Options</TableHeadCell>
            </TableRow>
          </TableHeader>
          {/* колонки */}
          <TableBody>
            <TableRow>
              <Td><p>icon</p><p>Pokémon Trading</p><p>Card Game</p></Td>
              <Td>1976</Td>
              <Td>9</Td>
              <Td>Ever fallen in love (with someone you shouldn't've)</Td>
            </TableRow>
          </TableBody>
        </Table>
      </Flex>
    </>
  );
}

export default GeneralSales;
