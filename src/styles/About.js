import styled from "styled-components";

export const MainDiv = styled.div`
    width: 100vw;
    height: ${props => props.Height};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: ${props=>props.bg};
    margin: ${props=>props.mg};
    position: relative;
    z-index: 2;
`

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding:120px 40px 60px 40px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
        padding-top: 85px;
    }

`
export const Introduction = styled.h1`
    color: #2D314D;
    font-size: 40px;
    font-weight: normal;
    @media (max-width: 900px) {
        text-align: center;
    }
    @media (max-width: 600px) {
        font-size: 30px;
    }

`
export const Description = styled.div`
    width: 650px;
    color: #848484;
    line-height: 25px;
    font-size: 18px;
    padding: 30px 0 60px 0;
    @media (max-width: 900px) {
        align-self: center;
        width: 100%;
        max-width: 600px;
        padding: 40px 0;
        text-align: center;
    }
`
export const Features = styled.div`
    display: grid;
    grid-template-columns: repeat(4,calc(25% - 7px));
    gap: 20px;
    @media (max-width: 900px) {
        grid-template-columns: 50% 50%;
    }
    @media (max-width: 600px) {
        grid-template-columns: 100%;
    }
`
export const Feature = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;
    border-radius: 10px;
    transition: .3s ease;
    flex-direction: column;
    padding: 10px 10px 50px 10px;
    :hover{
        background: #d9ecff;
    }
    @media (max-width: 600px) {
        align-items: center;
        text-align: center;
        padding: 10px;
        gap: 20px;
    }
`
export const FeatureImg = styled.img`
    width: 72px;
    height: 72px;
    margin-bottom: 10px;
    @media (max-width: 900px) {
        margin-bottom: 0
    }
`
export const FeatureTitle = styled.h3`
    font-weight: normal;
    font-size: 25px;
    color: #223333;
`
export const FeatureDescription = styled.p`
    color: #848484;
    line-height: 25px;
    font-size: 17px;
    letter-spacing: -.6px;
`