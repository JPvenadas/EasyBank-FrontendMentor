import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const MainDiv = styled.div`
    width: 100%;
    height: ${props => props.Height};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`
export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: ${props => props.Direction};
    align-items: ${props => props.Align};
    justify-content: ${props => props.Justify}
`
export const Button = styled.button`
    height: 45px;
    background: linear-gradient(to right, #00F990, #25C3F5,#00F990);
    background-size: 200%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 45px;
    color: white;
    padding: 0 30px;
    border-style: none;
    transition: .8s ease;
    font-weight: bold;
    letter-spacing: .5px;
    :hover{
        background-position: 100% 0;
    }
`