import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding:60px 40px 70px 40px;
    justify-content: center;
    display: flex;
    flex-direction: column;

`
export const Introduction = styled.h1`
    color: #223333;
    font-size: 33px;
    font-weight: normal
`
export const Description = styled.div`
    width: 590px;
    color: #848484;
    line-height: 25px;
    letter-spacing: 0.03em;
    padding: 50px 0 70px 0;
`
export const Features = styled.div`
    display: grid;
    grid-template-columns: repeat(4,calc(25% - 7px));
    gap: 10px;
    @media (max-width: 900px) {
        grid-template-columns: 50% 50%;
    }
`
export const Feature = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;
    padding: 10px;
    border-radius: 10px;
    transition: .3s ease;
    :hover{
        background: #d9ecff;
    }
    flex-direction: column;
    padding-bottom: 50px;
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