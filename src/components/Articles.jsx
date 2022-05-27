import React from 'react'
import { MainDiv } from '../styles/Main'
import ArticleItem from './Items/ArticleItem'
import {Container, Title, ArticleSection} from '../styles/Articles'
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
              <ArticleItem 
              image={img1}
              author="By Claire Ronbinsons"
              title="Recieve money in any currency with no fees"
              description="The world is getting smaller and we're becoming more mobile. So why shoud you be forced to only receive money in a single..."
              />
              <ArticleItem 
              image={img2}
              author="By Wilson Hutton"
              title="Treat yourself without worrying about money"
              description="Our simple Budgeting feature allows you to separate out your spending and set realistic limits each month. that means you..."
              />
              <ArticleItem 
              image={img3}
              author="By Wilson Hutton"
              title="Take your Easybank card wherever you go"
              description="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..."
              />
              <ArticleItem 
              image={img4}
              author="By Claire Ronbinsons"
              title="Our invite-only Beta are accounts are now live!"
              description="After a lot of hard work by the whole team, we're excited to launch our closed beta. it's easy to request an invite through the site..."
              />
        </ArticleSection>
        </Container>
    </MainDiv>
  )
}

export default Articles
