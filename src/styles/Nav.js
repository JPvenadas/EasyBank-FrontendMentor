import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const MainDiv = styled.div`
    width: 100vw;
    height: ${props => props.Height};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: white;
    z-index: 10;
`

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 0 40px;
    height: 100%;
    background: white;
    display: flex;
    @media (max-width: 600px) {
        justify-content: space-between
    }
`

export const Logo = styled.img`
    width: 140px;
    height: 20px;
`
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`
export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    @media (max-width: 900px){
        display:  none
    };
    
`
export const NavItemsContainer = styled.div`
    flex: 1;
    @media (max-width: 600px) {
        position: absolute;
        display: ${props => props.display};
        animation: ${props => props.animation} .3s;
        top: 82px;
        z-index: 9;
        justify-content: center;
        transition: .4s ease;
        height: calc(80% - 82px);
        width: 100%;
        left: 0;
        background: linear-gradient(rgba(0, 0, 0, 0.432), rgba(0, 0, 0, 0));
    }
`
export const NavFlex = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 17px;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    @media (max-width: 900px) {
        justify-content: flex-end
    }
    @media (max-width: 600px) {
        flex-direction: column;
        background: white;
        justify-content: center;
        width: 80%; 
        height: 200px;
        border-radius: 7px;
        margin: 20px;
    }
`
export const NavItems = styled.a`
    color: #8A8A8A;
    padding-bottom: 10px;
    :hover{
        border-bottom: 2px solid #00F990;
    }
    @media (max-width: 600px) {
        color: #2D314D;
    }
`
export const MenuContainer = styled.div`
    align-items: center;
    height: 100%;
    display: none;
    @media (max-width: 600px){
        display: flex;
    }
`
export const Hammenu = styled.button`
    border-style: none;
    height: 20px;
    width: 30px;
    background: url(${props => props.background}) no-repeat center;
    background-size: cover;
`

export const Spawn = keyframes`
    0%{
        opacity: 0;
        top: 50px;   
    }
    75%{
        opacity: 0.2;
        top: 79px
    }
    100%{
        opacity: 1;
        top: 82px;
    }
`
