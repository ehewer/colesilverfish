import React from "react";
import { css } from "@emotion/react"
import { graphql } from "gatsby";

// components
import Menu from "../components/menu";
import { Helmet } from "react-helmet";
import { Parallax, Background } from "react-parallax";
import Img from "gatsby-image"

// webpack
import background from "../images/rowers.jpg"

// Amplify
import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config);

export default function Home({data}) {
  return (
    <div>
      <Helmet>
        <title>{data.site.siteMetadata.fullname}</title>
      </Helmet>

      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
        `}
      >
        <h1
          css={css`
          `}
        >
          Hello there.
        </h1>
      </div>

      <Parallax
        strength={500}
      >
        <Background>
          <div
            css={css`
              height: 1000px;
              width: 2000px;
            `}
          >
            <Img fluid={data.background.childImageSharp.fluid} alt="Coal Harbor"/>
          </div>
          
        </Background>

        <div 
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 500px;
          `}
        >
          <Img fluid={data.logo.childImageSharp.fluid} alt="logo"
            css={css`
              height: 200px;
              width: 200px;
            `}
          />
        </div>
      </Parallax>

      <Menu>
        <p>Nothing to see here right now... this site is currently in progress!</p>
      </Menu>
      
    </div>
    
  )
}

export const query = graphql`
  query {
    site {
        siteMetadata {
            fullname
        }
    }
    logo: file(relativePath: { eq: "silverfishTRANSPARENT.png" }) {
      childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
          }
      }
    }
    background: file(relativePath: { eq: "rowers.jpg" }) {
      childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxHeight: 1575) {
              ...GatsbyImageSharpFluid_tracedSVG
          }
      }
    }
  }
`
