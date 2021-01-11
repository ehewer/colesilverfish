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
                    <p>Cole Silverfish is neither silver nor fish, but is a Cole.</p>
                    <img src="https://amplifyapp028d721e1fd44ea69418bb292d7267e5151438-dev.s3-us-west-2.amazonaws.com/public/self_proBW.jpg" alt="self" width="700px"></img>
                </SRLWrapper>
            </Menu>
        </SimpleReactLightbox>
    )
}