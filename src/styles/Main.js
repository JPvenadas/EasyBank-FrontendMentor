import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const MainDiv = styled.div`
    width: 100vw;
    height: ${props => props.Height};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: ${props=>props.bg};
    margin: ${props=>props.mg}
`
export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 0 40px;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: ${props => props.Direction};
    align-items: ${props => props.Align};
    justify-content: ${props => props.Justify}
`
export const Button = styled.button`
    height: 45px;
    background: linear-gradient(to right, #06D17C, #24B8E7,#06D17C);
    background-size: 200%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 45px;
    color: white;
    padding: 0px 35px;
    border-style: none;
    transition: .3s ease;
    font-size: 14px;
    font-weight: bolder;
    letter-spacing: .5px;
    :hover{
        background-position: 100% 0;
        transform: scale(0.97)
    }
`
