import React from 'react'
import { MainDiv, Button } from '../styles/Main'
import { 
    Container,
    FlexItemLeft,
    FlexItemRight,
    Background,
    InterfaceBg,
    Tagline,
    Description
 } from '../styles/Header'
import bg from './../assets/images/bg-intro-desktop.svg'
import mockups from './../assets/images/image-mockups.png'

const Header = () => {
  return (
   <MainDiv>
       <Container>
            <FlexItemLeft>
                <Tagline>
                Next Generation Digital Banking
                </Tagline>
                <Description>
                Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving budgeting, investing and much more
                </Description>
                <Button>
                   Request Invite
                </Button>
            </FlexItemLeft>
            <FlexItemRight>
                <Background src={bg}></Background>
                <InterfaceBg src={mockups}></InterfaceBg>
            </FlexItemRight>
       </Container>
   </MainDiv>
  )
}

export default Header
