import styled from 'styled-components'

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
`
export const NavItemsContainer = styled.div`
    flex: 1;
`
export const NavFlex = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    gap: 17px;
    width: 100%;
    height: 100%;
`
export const NavItems = styled.a`
    color: #8A8A8A;
    padding-bottom: 10px;
    :hover{
        border-bottom: 2px solid #00F990;
    }
`
export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`
export const Hammenu = styled.button`
    border-style: none;
    height: 20px;
    width: 30px;
    background: url(${props => props.background});
    display: none;
`
