import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { globalStyles, theme } from 'theme'

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export const Layout = props => (
  <StaticQuery query={query}>
    {data => (
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <header>
          <p>{data.site.siteMetadata.title}</p>
        </header>
        <main bg='mirage' color='white'>{props.children}</main>
      </ThemeProvider>
    )}
  </StaticQuery>
)
