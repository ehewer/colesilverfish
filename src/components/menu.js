import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default function Menu({ children }) {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        fullname
                    }
                }
            }
        `
    )

    return (
        <div
            css={css`
                margin: 0 auto;
                max-width: 700px;
                padding: ${rhythm(2)};
                padding-top: ${rhythm(1.5)};
            `}
        >
            <Link to={"/"}>
                <h3
                    css={css`
                        margin-bottom: ${rhythm(2)};
                        display: inline-block;
                        font-style: normal;
                    `}
                >
                    {data.site.siteMetadata.fullname}
                </h3>
            </Link>
            <Link
                to={"/about/"}
                css={css`
                    float: right;
                    padding-left: 20px;
                    padding-right: 20px;
                `}
            >
                About
            </Link>
            <Link
                to={"/upload"}
                css={css`
                    float: right;
                    padding-left: 20px;
                    padding-right: 20px;
                `}
            >
                Upload
            </Link>
            {children}
        </div>
    )
}