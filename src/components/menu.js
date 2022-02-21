import React from "react";
import { css } from "@emotion/react";
import { rhythm } from "../utils/typography";

// components
import { useStaticQuery, Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

/* Simple navigation menu
 *
 */ 
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
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 0 auto;
                max-width: 700px;
                padding: ${rhythm(2)};
                padding-top: ${rhythm(1.5)};
                text-decoration: none;
            `}
        >
            <Link to={"/"}>
                {/*
                <h3
                    css={css`
                        margin-bottom: ${rhythm(2)};
                        display: inline-block;
                        font-style: normal;
                    `}
                >
                    {data.site.siteMetadata.fullname}
                </h3>
                */}
                <StaticImage
                    src="../images/logos/silverfish_black_TP.png"
                    alt=""
                    placeholder="tracedSVG"
                    height={100}
                    css={css`
                    `}
                />
            </Link>

            <Link
                to={"/about/"}
                css={css`
                    float: right;
                    padding-left: 20px;
                    padding-right: 20px;
                    text-decoration: none;
                `}
            >
                About
            </Link>

            <Link
                to={"/gallery"}
                css={css`
                    float: right;
                    padding-left: 20px;
                    padding-right: 20px;
                    text-decoration: none;
                `}
            >
                Gallery
            </Link>
            {children}
        </div>
    )
}