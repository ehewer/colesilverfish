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
                        padding: 20px;
                    `}
                >
                    <b 
                        css={css`
                            margin-bottom: 50px;
                        `}
                    >
                        Cole Silverfish is the photography alias of Elijah Hewer.
                    </b>

                    <StaticImage
                        src="../images/blinded.jpg"
                        alt="Cole Silverfish portrait"
                        height={400}
                        css={css`
                            margin-top: 40px;
                            margin-bottom: 40px;
                        `}
                    />

                    <p>
                        As a lifelong film lover but a newcomer to photography,
                        Elijah is continuously looking to sharpen his photo-taking and editing skills.
                        Currently, he is an Assistant Director for the Media team of the UBC Recreation Intramural program.
                        <br/>
                        <br/>
                        Elijah is also a Computer Engineering student at UBC in Vancouver, Canada.
                        Building and improving this website is an ongoing personal project, 
                        and you can browse his <a href="https://github.com/ehewer">GitHub</a> and <a href="https://www.linkedin.com/in/elijahhewer/">LinkedIn</a>.
                    </p>

                    
                </div>
            </SRLWrapper>
        </SimpleReactLightbox>
    )
}