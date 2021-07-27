import React from 'react'
import { 
ProductsContainer,
ProductsHeading,
ProductsWrapper,
ProductsCart,
ProductsImg,
ProductsInfo,
ProductsTitle,
ProductsDesc,
ProductsPrice,
ProductsButton
} from './ProductsElements'

const Products = ({heading, data}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductsWrapper>
              {data.map((product, index) =>{
                  return (
                     <ProductsCart key={index}>
                         <ProductsImg src={product.img} alt={product.alt}/>
                         <ProductsInfo>
                             <ProductsTitle>{product.name}</ProductsTitle>
                             <ProductsDesc>{product.desc}</ProductsDesc>
                             <ProductsPrice>{product.price}</ProductsPrice>
                             <ProductsButton>{product.button}</ProductsButton>
                         </ProductsInfo>
                     </ProductsCart> 
                  )
              })}  
            </ProductsWrapper>
            
        </ProductsContainer>
    )
}

export default Products
