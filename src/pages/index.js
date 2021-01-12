import React from "react"
import styled from "styled-components"
import { useStaticQuery, Link, graphql } from "gatsby"

// components
import Menu from "../components/menu"
import { Helmet } from "react-helmet"

export default function Home({data}) {
  return (
    <div>
      <Helmet>
        <title>{data.site.siteMetadata.fullname}</title>
      </Helmet>

      <Menu>
        <p>Nothing to see here right now... this site is currently in progress!</p>
      </Menu>
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
