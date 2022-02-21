import React from "react"
import { css } from "@emotion/react"
import { graphql } from "gatsby";

// components
import Menu from "../components/menu"
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import ImgCol from "../components/imgcol";

export default function Gallery({data}) {
    return(
        <SimpleReactLightbox>
            <Menu/>

            <SRLWrapper>
                <div
                    css={css`
                        margin: auto;
                        margin-bottom: 50px;
                        max-width: 1100px;
                    `}
                >
                    <p 
                        css={css`
                            text-align: center;
                        `}
                    >
                        Click on images for a lightbox.
                    </p>
                </div>
                
                <div
                    css={css`
                        display: flex;
                        justify-content: center;
                        max-width: 1100px;
                        margin: auto;
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
        col1: allFile(
            filter: {relativeDirectory: {eq: "gallery/col1"}}
            sort: {fields: relativePath, order: ASC}
        ) {
            edges {
                node {
                    name
                    relativePath
                    childImageSharp {
                        gatsbyImageData(
                            layout: CONSTRAINED
                            placeholder: TRACED_SVG
                        )
                    }
                }
            }
        }
        col2: allFile(
            filter: {relativeDirectory: {eq: "gallery/col2"}}
            sort: {fields: relativePath, order: ASC}
        ) {
            edges {
                node {
                    name
                    relativePath
                    childImageSharp {
                        gatsbyImageData(
                            layout: CONSTRAINED
                            placeholder: TRACED_SVG
                        )
                    }
                }
            }
        }
        col3: allFile(
            filter: {relativeDirectory: {eq: "gallery/col3"}}
            sort: {fields: relativePath, order: ASC}
        ) {
            edges {
                node {
                    name
                    relativePath
                    childImageSharp {
                        gatsbyImageData(
                            layout: CONSTRAINED
                            placeholder: TRACED_SVG
                        )
                    }
                }
            }
        }
    }
`