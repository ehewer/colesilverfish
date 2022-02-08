import React from "react"
import { css } from "@emotion/react"
import { GatsbyImage } from "gatsby-plugin-image";

/* 
 * Given a list of edges (files) from a GraphQL query,
 * display each image as a constrained GatsbyImage
 * 
 * Intended to be placed in a flexbox side-by-side to create columns of images.
 */
export default function ImgCol({ edges }) {
    return(
        <div>
            { edges.map(({ node }, index) => (
                <GatsbyImage
                    image={node.childImageSharp.gatsbyImageData}
                    alt={node.name}
                    css={css`
                        margin: 20px;
                    `}
                />
            ))}
        </div>
    )
}