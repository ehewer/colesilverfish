import React from "react";
import { css } from "@emotion/react"
import { graphql } from "gatsby";

// components
import Menu from "../components/menu";
import { Helmet } from "react-helmet";
import { Parallax, Background } from "react-parallax";
import { StaticImage } from "gatsby-plugin-image"

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
                COLE SILVERFISH
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
                        <StaticImage
                            src="../images/boat_stanley.JPG"
                            alt="A ship at Lions Gate Bridge"
                            layout="fullWidth"
                            placeholder="blurred"
                        />
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
                    <StaticImage
                        src="../images/logos/silverfish_white_TP.png"
                        alt="logo"
                        placeholder="tracedSVG"
                        width={200}
                        height={200}
                    />
                </div>
            </Parallax>

            <Menu></Menu>
            
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
    }
`
/*
    logo: file(relativePath: { eq: "logos/silverfish_white_TP.png" }) {
      childImageSharp {
          gatsbyImageData(layout: FLUID)
          fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
          }
      }
    }
    background: file(relativePath: { eq: "boat_stanley.JPG" }) {
      childImageSharp {
          gatsbyImageData(layout: FLUID)
          fluid(maxHeight: 1575) {
              ...GatsbyImageSharpFluid_tracedSVG
          }
      }
    }
  }
`
*/