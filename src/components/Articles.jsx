import React from 'react'
import { MainDiv } from '../styles/Main'
import { 
    Container,
    Title,
    ArticleSection,
    Article,
    ArticleImg,
    ArticleBody,
    Author,
    ArticleTitle,
    ArticleDescription
    } from '../styles/Articles'
import img1 from './../assets/images/image-currency.jpg'
import img2 from './../assets/images/image-restaurant.jpg'
import img3 from './../assets/images/image-plane.jpg'
import img4 from './../assets/images/image-confetti.jpg'

const Articles = () => {
  return (
    <MainDiv bg="#f8f8f8">
        <Container>
            <Title>Latest Articles</Title>
            <ArticleSection>
            <Article>
                <ArticleImg src={img1}></ArticleImg>
                <ArticleBody>
                  <Author>By Claire Ronbinsons</Author>
                  <ArticleTitle>Recieve money in any currency with no fees</ArticleTitle>
                  <ArticleDescription>
                    The world is getting smaller and we're becoming more mobile. So why shoud you be forced to only receive money in a single...
                  </ArticleDescription>
                </ArticleBody>
            </Article>
            <Article>
                <ArticleImg src={img2}></ArticleImg>
                <ArticleBody>
                  <Author>By Wilson Hutton</Author>
                  <ArticleTitle>Treat yourself without worrying about money</ArticleTitle>
                  <ArticleDescription>
                    Our simple Budgeting feature allows you to separate out your spending and set realistic limits each month. that means you...
                  </ArticleDescription>
                </ArticleBody>             
            </Article>
            <Article>
               <ArticleImg src={img3}></ArticleImg>
               <ArticleBody>
                <Author>By Wilson Hutton</Author>
                <ArticleTitle>Take your Easybank card wherever you go</ArticleTitle>
                <ArticleDescription>
                  We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...
                </ArticleDescription>
                </ArticleBody>
            </Article>
            <Article>
               <ArticleImg src={img4}></ArticleImg>
               <ArticleBody>
               <Author>By Claire Ronbinsons</Author>
               <ArticleTitle>Our invite-only Beta are accounts are now live!</ArticleTitle>
               <ArticleDescription>
                 After a lot of hard work by the whole team, we're excited to launch our closed beta. it's easy to request an invite through the site...
               </ArticleDescription>
               </ArticleBody>
            </Article>
        </ArticleSection>
        </Container>
    </MainDiv>
  )
}

export default Articles
