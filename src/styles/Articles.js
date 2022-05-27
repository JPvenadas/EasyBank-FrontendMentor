import styled from "styled-components";

export const Container = styled.div`
     width: 100%;
    max-width: 1200px;
    padding:60px 40px 70px 40px;
    flex-direction: column;
    height: 100%;
    display: flex;
`
export const Title = styled.h1`
    color: #2D314D;
    font-size: 40px;
    font-weight: normal;
    margin-bottom: 50px;
    @media (max-width: 900px) {
        text-align: center;
    }
    @media (max-width: 600px) {
        font-size: 30px;
    }
`
export const ArticleSection = styled.div`
    display: grid;
    grid-template-columns: repeat(4,calc(25% - 18px));
    gap: 25px;
    width: 100%;
    @media (max-width: 900px) {
        grid-template-columns: 50% 50%;
    }
    @media (max-width: 600px) {
        grid-template-columns: 100%;
    }
`
export const Article = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #ffffff;
`
export const ArticleImg = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 5px
`
export const ArticleBody = styled.div`
    padding: 30px 30px 40px 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`
export const Author = styled.p`
    font-size: 10px;
`
export const ArticleTitle = styled.h3`
    font-size: 17px;
    color: #2D314D;
    font-weight: normal
`
export const ArticleDescription = styled.p`
    font-size: 13px;
`
