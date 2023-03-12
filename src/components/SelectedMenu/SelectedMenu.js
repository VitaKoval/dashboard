import React from 'react';
import { Container } from './styled';
// import {nanoid} from 'nanoid'

function SelectedMenu({isOpenSelectMenu, width, children}) {

    return (
        <Container isOpen={isOpenSelectMenu} width={width}>
            {/* {selectedList.map((item)=>{return (
            <li key={nanoid()}>{item}</li>
            )})} */}
            {children}
            
  </Container>
      
   
  )
}

export default SelectedMenu;
