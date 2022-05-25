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
      height: auto;
      padding: 0;
    }
    @media (max-width: 600px) {
        
    }
`
export const FlexItemLeft = styled.div`
    width: 50%;
    max-width: 560px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    height: 600px;
    gap: 40px;
    @media (max-width: 900px) {
        height: auto;
        max-width: 100%;
        width: 100%;
        text-align: center;
        align-items: center;
        padding-top: 30px;
    }
`
export const FlexItemRight = styled.div`
    width: 50%;
    max-width: 560px;
    position: relative;
    @media (max-width: 900px) {
        height: 300px;
        width: 100%;
        max-width: 100%;
    }
`
export const Background = styled.div`
    width: 1168px;
    height: 964px;
    background: url(${props=>props.Background});
    background-size: 100% 100%;
    position: absolute;
    z-index: 1;
    top: -550px;
    left: -100px;
    @media (max-width: 900px) {
        width: 100%;
        background-size:100% 340px!important;
        height: 419px;
        top: 0px;
        left: 0px;
        background: url(${props=>props.BackgroundMobile}) no-repeat;
    }
`
export const InterfaceBg = styled.img`
    position: absolute;
    width: 693px;
    height: 891px;
    z-index: 2;
    top: -420px;
    left: 130px;
    @media (max-width: 900px) {
        top: -120px;
        left: calc(50% - 167px);
        width: 335px;
        height: 417px;
    }
`
export const Tagline = styled.div`
    font-size: 48px;
    width: 379px;
    color: #223333;
    @media (max-width: 600px) {
        font-size: 40px;
    }
`
export const Description = styled.div`
    width: 410px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.04em;
    color: #848484;
    @media (max-width: 600px) {
        width: 100%;
        font-size: 15px;
        padding: 0 10px;
    }
`
