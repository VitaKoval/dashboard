import React from "react";
import { GeneralSalesContainer } from "../ui/GeneralSales.styled";
import TopBlock from "./TopBlock";
import Wrapper from "./Wrapper";
// icons
import {ReactComponent as SettingLight} from '../images/icons/setting-light.svg'

function GeneralSales() {
    return (
        <Wrapper box>
            <GeneralSalesContainer>
                <TopBlock title='General Sales / Time' chois= 'Table settings' icon={<SettingLight/>}/>
            </GeneralSalesContainer>
           
        </Wrapper>
    )
}

export default GeneralSales;