import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SEO from '../components/SEO';

const PizzaGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  `;

export default function SinglePizzaPage({ data: { pizza } }) {
  return (
    <>
    {/* use question marks to keep from breaking page */}
    <SEO title={pizza.name} image={pizza.image?.asset?.fluid?.src} />
  <PizzaGrid>
    <Img fluid={pizza.image.asset.fluid} />
    <div>
    <h2 className="mark">{pizza.name}</h2>
    <ul>
      {pizza.toppings.map((topping) => (
        <li key={topping.id}>{topping.name}</li>
      ))}
    </ul>
    </div>
  </PizzaGrid>
  </>
  )
}


// this needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) { 
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id 
        vegetarian
      }
   }
  }
`