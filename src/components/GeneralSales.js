import React from "react";
import { GeneralSalesContainer } from "../ui/GeneralSales.styled";
import TopBlock from "./TopBlock";
import Wrapper from "./Wrapper";
// icons
import {ReactComponent as SettingLight} from '../images/icons/setting-light.svg'
import Flex from "./Flex";

function GeneralSales() {
    return (
        <>
      <TopBlock title='General Sales / Time' choice='Table settings' icon={<SettingLight/>}/>
      <Flex>
        <h1> Loading...</h1>
      </Flex>
      
      
   </>
       
    )
}

export default GeneralSales;