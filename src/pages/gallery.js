import React from "react"
import { css } from "@emotion/react"

// components
import Menu from "../components/menu"
import SimpleReactLightbox from "simple-react-lightbox";
import {SRLWrapper} from "simple-react-lightbox";
import { StaticImage } from "gatsby-plugin-image";
// import Img from "gatsby-image"

export default function Gallery({data}) {
    return(
        <SimpleReactLightbox>
            <Menu>
                <SRLWrapper>
                    <p 
                        css={css`
                            margin-bottom: 50px;
                        `}
                    >
                        Click on images for a lightbox.
                    </p>
                    
                    <StaticImage
                        src="../images/gallery/bridge.jpg"
                        alt="A couple on a bridge"
                    />
                    {/*
                    <div>
                        {
                        data.allFile.edges.map(({node}, index) => (
                            <Img fluid={node.childImageSharp.fluid} alt={node.name}
                                css={css`
                                    margin: 70px;
                                `}
                            />
                        ))
                        }
                    </div>
                    */}
                </SRLWrapper>
            </Menu>
        </SimpleReactLightbox>
    )
}

/*
export const query = graphql`
    query MyQuery {
        allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
            edges {
                node {
                    name
                    childImageSharp {
                        fluid(maxWidth:1000) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
`
*/