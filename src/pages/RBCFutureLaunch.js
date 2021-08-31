import React from "react"
import { css } from "@emotion/react"

// components
import Menu from "../components/menu"
import SimpleReactLightbox from "simple-react-lightbox";
import {SRLWrapper} from "simple-react-lightbox";
import Img from "gatsby-image"

export default function RBC({data}) {
    return(
        <SimpleReactLightbox>
            <Menu>
                <SRLWrapper>
                    <Img fluid={data.self.childImageSharp.fluid} alt="RBC Future Launch Submission"/>
                    <p 
                        css={css`
                            margin: 25px;
                        `}
                    >
                        <em>JUMPWOMAN</em>, 2021
                        <br/>
                        My RBC Future Launch submission.
                        <br/>
                        Click on the image for a lightbox.
                    </p>
                </SRLWrapper>
            </Menu>
        </SimpleReactLightbox>
    )
}

export const query = graphql`
    query {
        self: file(relativePath: { eq: "JUMPWOMAN.jpg" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth:1000) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`