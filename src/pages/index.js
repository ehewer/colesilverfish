import React from "react";
import { css } from "@emotion/react"
import { graphql, Link } from "gatsby";

// components
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
                height: 150px;
                `}
            >
                <h1
                css={css`
                    font-size: 4vw;
                    letter-spacing: 2vw;
                    text-align: center;
                `}
                >
                    COLE SILVERFISH
                </h1>
            </div>

            <Parallax
                strength={300}
            >
                <Background>
                    <div
                        css={css`
                        height: 1000px;
                        width: 2000px;
                        margin-bottom: 0px;
                        `}
                    >
                        <StaticImage
                            src="../images/boat_stanley_CROP.jpg"
                            alt="A ship at Lions Gate Bridge"
                            placeholder="blurred"
                            layout="fullWidth"
                            quality={80}
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

            {/*
                Use a CSS grid to put links on top of GatsbyImage components 
                for better optimization than regular background images
            */}
            <div
                css={css`
                    display: grid;
                    place-items: center;
                    justify-items: center;
                    grid-template-columns: 1fr 1fr;
                    max-width: 900px;
                    margin: auto;
                `}
            >
                {/* Menu Link 1 (About) */}
                <StaticImage
                    src="../images/kawhactus1.jpg"
                    alt=""
                    placeholder="blurred"
                    css={css`
                        grid-area: 1/1;
                        width: 1fr;
                        margin: 30px;
                    `}
                />
                <div
                    css={css`
                        grid-area: 1/1;
                        position: relative;
                        place-items: center;
                        display: grid;
                    `}
                >
                    <Link
                        to={"/about"}
                        css={css`
                            background-color: white;
                            padding: 30px;
                        `}
                    >
                        About
                    </Link>
                </div>

                {/* Menu Link 2 (Gallery) */}
                <StaticImage
                    src="../images/kawhactus2.jpg"
                    alt=""
                    placeholder="blurred"
                    css={css`
                        grid-area: 1/2;
                        width: 1fr;
                        margin: 30px;
                    `}
                />
                <div
                    css={css`
                        grid-area: 1/2;
                        position: relative;
                        place-items: center;
                        display: grid;
                    `}
                >
                    <Link
                        to={"/gallery"}
                        css={css`
                            background-color: white;
                            padding: 30px;
                        `}
                    >
                        Gallery
                    </Link>
                </div>
            </div>
            
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