import React from "react";
import { css } from "@emotion/react";
// import { graphql } from "gatsby"

// components
import Menu from "../components/menu";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { StaticImage } from "gatsby-plugin-image";

export default function About({data}) {
    return(
        <SimpleReactLightbox>
            <Menu/>
                
            <SRLWrapper>
                <div
                    css={css`
                        margin: 0 auto;
                        max-width: 700px;
                    `}
                >
                    <b 
                        css={css`
                            margin-bottom: 50px;
                        `}
                    >
                        Cole Silverfish is neither silver nor fish.
                    </b>

                    <p>
                        As a lifelong film lover but a newcomer to photography, Cole is continuously looking to sharpen his photo-taking and editing skills. He also looks to expand into videography and filmmaking in the future.
                        <br></br>
                        <br></br>
                        By day, Cole is a Computer Engineering student in Vancouver, Canada. Building this website is his current personal project, and you can find his GitHub <a href="https://github.com/ehewer">here</a>.
                    </p>

                    <StaticImage
                        src="../images/self_proBW2re.jpg"
                        alt="Headshot"
                    />
                </div>
            </SRLWrapper>
        </SimpleReactLightbox>
    )
}

/*
export const query = graphql`
    query {
        self: file(relativePath: { eq: "self_proBW2re.jpg" }) {
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
*/