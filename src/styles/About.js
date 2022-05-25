import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding:60px 40px 70px 40px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
        padding-top: 85px;
    }

`
export const Introduction = styled.h1`
    color: #223333;
    font-size: 33px;
    font-weight: normal;
    @media (max-width: 900px) {
        text-align: center;
    }
    @media (max-width: 600px) {
        font-size: 30px;
    }

`
export const Description = styled.div`
    width: 590px;
    color: #848484;
    line-height: 25px;
    letter-spacing: 0.03em;
    padding: 50px 0 70px 0;
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
    gap: 10px;
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
`
export const FeatureTitle = styled.h3`
    font-weight: normal;
    font-size: 23px;
    color: #223333;
`
export const FeatureDescription = styled.p`
    color: #848484;
    line-height: 25px;
    letter-spacing: 0.03em;
`