import React from 'react'
import { MainDiv, Button } from '../styles/Main'
import { Logo } from '../styles/Nav'
import { 
        Container,
        FooterCenter,
        Socials,
        Links,
        Text,
        FooterCorner,
        Footernav
 } from '../styles/Footer'
import Logopic from './../assets/images/logo-white.png'
import facebook from './../assets/images/icon-facebook.svg'
import youtube from './../assets/images/icon-youtube.svg'
import twitter from './../assets/images/icon-twitter.svg'
import pinterest from './../assets/images/icon-pinterest.svg'
import instagram from './../assets/images/icon-instagram.svg'

const Footer = () => {
  return (
    <MainDiv bg = "#2D314D">
        <Container>
          <FooterCorner gap="50px" align="flex-start">
            <Logo src={Logopic}></Logo>
            <Socials>
              <a href="#"><Links src={facebook}></Links></a>
              <a href="#"><Links src={youtube}></Links></a>
              <a href="#"><Links src={twitter}></Links></a>
              <a href="#"><Links src={pinterest}></Links></a>
              <a href="#"><Links src={instagram}></Links></a>
            </Socials>
          </FooterCorner>
          <FooterCenter>
              <Footernav>
                <a href="#"><Text color="#fff">About Us</Text></a>
                <a href="#"><Text color="#fff">Contact</Text></a>
                <a href="#"><Text color="#fff">Blog</Text></a> 
              </Footernav>
              <Footernav>
                <a href="#"><Text color="#fff">Careers</Text></a>
                <a href="#"><Text color="#fff">Support</Text></a>
                <a href="#"><Text color="#fff">Privacy Policies</Text></a>
              </Footernav>
          </FooterCenter>
          <FooterCorner gap="30px" align="flex-end">
              <Button>Request Invite</Button>
              
              <Text>©Easybank. All Rights Reserved</Text>
          </FooterCorner>
        </Container>
    </MainDiv>
  )
}

export default Footer
