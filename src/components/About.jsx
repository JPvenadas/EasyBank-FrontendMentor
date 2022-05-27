import React from 'react'
import { MainDiv,Container,Introduction,Description,Features} from '../styles/About'
import FeatureItem from './Items/FeatureItem'
import online from './../assets/images/icon-online.svg'
import budgeting from './../assets/images/icon-budgeting.svg'
import onboarding from './../assets/images/icon-onboarding.svg'
import api from './../assets/images/icon-api.svg'

const About = () => {
  return (
    <MainDiv mg="43px 0 0 0" bg="#f3f3f3">
        <Container>
            <Introduction>
                Why choose EasyBank?
            </Introduction>
            <Description>
            We leverage Open Banking to turn your bank account into your financial hub. control your finances like never before
            </Description>
            <Features>
                <FeatureItem
                image={online}
                title="Online Banking"
                description="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world"
                />
                <FeatureItem
                image={budgeting}
                title="Simple Budgeting"
                description="See exactly where your money goes each month. Recieve notifications when you’re close to hitting your limits"
                />
                <FeatureItem
                image={onboarding}
                title="Fast On-Boarding"
                description=" We dont do branches. Open your account in minutes online and start taking control of your finances right away"
                />
                 <FeatureItem
                image={api}
                title="Open API"
                description="Manage your savings, investments, pension, and much more frm one account. Tracking your mony has never been easier"
                />
            </Features>
        </Container>
    </MainDiv>
  )
}

export default About
