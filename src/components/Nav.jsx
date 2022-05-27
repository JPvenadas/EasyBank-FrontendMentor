import React from 'react'
import { useState } from 'react'
import {  
        Button,
    } from '../styles/Main'
import {           
        MainDiv,
        Container, 
        Logo, 
        LogoContainer, 
        ButtonContainer,
        NavItemsContainer,
        NavItems,
        NavFlex,
        MenuContainer,
        Hammenu,
        Spawn
    } from '../styles/Nav'

import LogoPic from './../assets/images/logo.svg'
import Menu from './../assets/images/icon-hamburger.svg'
import Close from './../assets/images/icon-close.svg'

const Nav = () => {

    const [Navstate, SetNavState] = useState(false)

    return (
    <MainDiv Height='82px'>
        <Container>
           <LogoContainer>
            <Logo src={LogoPic}></Logo>
           </LogoContainer>
        <NavItemsContainer 
        animation = {Spawn}
        display = {Navstate === true? "flex": "none"}>
            <NavFlex>
                <li>
                    <NavItems href=''>
                        Home
                    </NavItems>
                </li>
                <li>
                    <NavItems href=''>
                        About
                    </NavItems>
                </li>
                <li>
                    <NavItems href=''>
                        Contacts
                    </NavItems>
                </li>
                <li>
                    <NavItems href=''>
                        Blog
                    </NavItems>
                </li>
                <li>
                    <NavItems href=''>
                        Careers
                    </NavItems>
                </li>
            </NavFlex>
        </NavItemsContainer>
        <ButtonContainer>
            <Button>Request Invite</Button>
        </ButtonContainer>
        <MenuContainer>
            <Hammenu onClick={()=>{SetNavState(!Navstate)}} background= {Navstate === true? Close: Menu}></Hammenu>
        </MenuContainer>
        </Container>
    </MainDiv>
  )
}

export default Nav
