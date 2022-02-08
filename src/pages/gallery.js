import React from "react"
import { css } from "@emotion/react"
import { graphql } from "gatsby";

// components
import Menu from "../components/menu"
import SimpleReactLightbox from "simple-react-lightbox";
import {SRLWrapper} from "simple-react-lightbox";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import ImgCol from "../components/imgcol";

export default function Gallery({data}) {
    return(
        <SimpleReactLightbox>
            <Menu/>

            <SRLWrapper>
                <p 
                    css={css`
                        margin-bottom: 50px;
                    `}
                >
                    Click on images for a lightbox.
                </p>
                
                <StaticImage
                    src="../images/rowers.jpg"
                    alt="Rowers in Coal Harbor"
                />

                <div
                    css={css`
                        display: flex;
                        justify-content: center;
                        max-width: 700px
                    `}
                >
                    {/* Column 1 */}
                    <ImgCol edges={data.col1.edges}/>

                    {/* Column 2 */}
                    <ImgCol edges={data.col2.edges}/>

                    {/* Column 3 */}
                    <ImgCol edges={data.col3.edges}/>
                </div>
            </SRLWrapper>
        </SimpleReactLightbox>
    )
}

export const query = graphql`
    query {
        col1: allFile(filter: {relativeDirectory: {eq: "gallery/col1"}}) {
            edges {
                node {
                    name
                    relativePath
                    childImageSharp {
                        gatsbyImageData(
                            layout: CONSTRAINED
                        )
                    }
                }
            }
        }
        col2: allFile(filter: {relativeDirectory: {eq: "gallery/col2"}}) {
            edges {
                node {
                    name
                    relativePath
                    childImageSharp {
                        gatsbyImageData(
                            layout: CONSTRAINED
                        )
                    }
                }
            }
        }
        col3: allFile(filter: {relativeDirectory: {eq: "gallery/col3"}}) {
            edges {
                node {
                    name
                    relativePath
                    childImageSharp {
                        gatsbyImageData(
                            layout: CONSTRAINED
                        )
                    }
                }
            }
        }
    }
`