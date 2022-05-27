import React from 'react'
import { Article,
         ArticleBody,
         ArticleImg,
         ArticleTitle,
         Author,
         ArticleDescription
 } from '../../styles/Articles' 
const ArticleItem = ({image, author, title, description}) => {
    
  return (
      <Article>
          <ArticleImg src={image}></ArticleImg>
          <ArticleBody>
              <Author>{author}</Author>
              <ArticleTitle>{title}</ArticleTitle>
              <ArticleDescription>
                 {description}
              </ArticleDescription>
          </ArticleBody>
      </Article>
  )
}

export default ArticleItem
