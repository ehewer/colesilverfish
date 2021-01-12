import React from "react"
import { css } from "@emotion/react"

// components
import Menu from "../components/menu"
import SimpleReactLightbox from "simple-react-lightbox"
import {SRLWrapper} from "simple-react-lightbox"

export default function About() {
    return(
        <SimpleReactLightbox>
            <Menu>
                <SRLWrapper>
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
                        By day, Cole is a Computer Engineering student in Vancouver, Canada. Building this website is his current personal project, and you can find his GitHub <a href="https://github.com/ehewer">here</a>
                    </p>
                    <a href="https://amplifyapp028d721e1fd44ea69418bb292d7267e5151438-dev.s3-us-west-2.amazonaws.com/public/self_proBW.jpg">
                        <img src="https://amplifyapp028d721e1fd44ea69418bb292d7267e5151438-dev.s3-us-west-2.amazonaws.com/public/self_proBW.jpg" alt="self" width="700px"></img>
                    </a>
                </SRLWrapper>
            </Menu>
        </SimpleReactLightbox>
    )
}