import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 0 40px;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: white;
    display: flex;
    @media (max-width: 900px) {
      flex-direction: column-reverse;
    }
`
export const FlexItemLeft = styled.div`
    flex: 1;
    max-width: 560px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    height: 600px;
    gap: 40px;
`
export const FlexItemRight = styled.div`
    flex: 1;
    max-width: 560px;
    position: relative;
    @media (max-width: 900px) {
        height: 280px;
    }
`
export const Background = styled.img`
    width: 1168px;
    height: 964px;
    position: absolute;
    z-index: 1;
    top: -550px;
    left: -100px;
`
export const InterfaceBg = styled.img`
    position: absolute;
    width: 693px;
    height: 891px;
    z-index: 2;
    top: -420px;
    left: 130px;
`
export const Tagline = styled.div`
    font-size: 48px;
    width: 379px;
`
export const Description = styled.div`
width: 410px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0.04em;
color: #5B5B5B;

`