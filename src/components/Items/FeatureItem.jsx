import React from 'react'
import { 
    Feature,
    FeatureImg,
    FeatureTitle,
    FeatureDescription
 } from '../../styles/About'
const FeatureItem = ({image, title, description}) => {
  return (
      <Feature>
          <FeatureImg src={image}></FeatureImg>
          <FeatureTitle>
             {title}
          </FeatureTitle>
          <FeatureDescription>
             {description}
          </FeatureDescription>
      </Feature>
  )
}

export default FeatureItem
