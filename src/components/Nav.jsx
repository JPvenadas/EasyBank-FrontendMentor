import React from 'react'
import { 
        MainDiv, 
        Container, 
        Button,
    } from '../styles/Main'
import { 
        Logo, 
        LogoContainer, 
        ButtonContainer,
        NavItemsContainer,
        NavItems,
        NavFlex,
        MenuContainer,
        Hammenu
    } from '../styles/Nav'

import LogoPic from './../assets/images/logo.svg'
import Menu from './../assets/images/icon-hamburger.svg'

const Nav = () => {
  return (
    <MainDiv Height='82px'>
        <Container>
           <LogoContainer>
            <Logo src={LogoPic}></Logo>
           </LogoContainer>
        <NavItemsContainer>
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
            <Hammenu background={Menu}></Hammenu>
        </MenuContainer>
        </Container>
    </MainDiv>
  )
}

export default Nav
