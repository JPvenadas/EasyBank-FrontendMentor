import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 0 40px;
    height: 200px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
      
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        height: auto;
        padding: 40px;
        gap: 30px;
    }
`
export const FooterCorner = styled.div`
    height: 100%;
    gap: ${props=>props.gap};
    display: flex;
    flex-direction: column;
    align-items: ${Props=>Props.align};
    justify-content: center;
    @media (max-width: 900px) {
        align-items: center;
        gap: 30px;
    }
`
export const FooterCenter = styled.div`
    display: flex;
    height: 100%;
    @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    gap: 8px;
}
`
export const Socials = styled.div`
    display: flex;
    gap: 15px;
`
export const Links = styled.img`
    width: 20px;
    height: 20px
`
export const Text = styled.div`
    color: ${props=>props.color}
`
export const Footernav = styled.div`
    max-width: 180px;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: 900px) {
        max-width: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: auto;
    }
`