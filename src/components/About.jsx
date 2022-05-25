import React from 'react'
import { MainDiv } from '../styles/Main'
import { 
    Container,
    Introduction,
    Description,
    Features,
    Feature,
    FeatureImg,
    FeatureTitle,
    FeatureDescription
} from '../styles/About'
import online from './../assets/images/icon-online.svg'
import budgeting from './../assets/images/icon-budgeting.svg'
import onboarding from './../assets/images/icon-onboarding.svg'
import api from './../assets/images/icon-api.svg'

const About = () => {
  return (
    <MainDiv mg="43px 0 0 0" bg="#f3f3f3">
        <Container>
            <Introduction>
                Why Choose EasyBank?
            </Introduction>
            <Description>
            We leverage Open Banking to turn your bank account into your financial hub. control your finances like never before
            </Description>
            <Features>
                <Feature>
                    <FeatureImg src={online}></FeatureImg>
                    <FeatureTitle>
                        Online Banking
                    </FeatureTitle>
                    <FeatureDescription>
                        Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world
                    </FeatureDescription>
                </Feature>
                <Feature>
                    <FeatureImg src={budgeting}></FeatureImg>
                      <FeatureTitle>
                          Simple Budgeting
                      </FeatureTitle>
                      <FeatureDescription>
                      See exactly where your money goes each month. Recieve notifications when you’re close to hitting your limits
                      </FeatureDescription>
                  </Feature>
                  <Feature>
                      <FeatureImg src={onboarding}></FeatureImg>
                      <FeatureTitle>
                          Fast On-Boarding
                      </FeatureTitle>
                      <FeatureDescription>
                      We dont do branches. Open your account in minutes online and start taking control of your finances right away
                      </FeatureDescription>
                  </Feature>
                  <Feature>
                      <FeatureImg src={api}></FeatureImg>
                      <FeatureTitle>
                          Open API
                      </FeatureTitle>
                      <FeatureDescription>
                      Manage your savings, investments, pension, and much more frm one account. Tracking your mony has never been easier
                      </FeatureDescription>
                  </Feature>
            </Features>
        </Container>
    </MainDiv>
  )
}

export default About
