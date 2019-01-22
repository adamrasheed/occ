import React from 'react'
import MainWrapper from '../components/MainView/mainWrapper'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <MainWrapper people={data.allAirtable.edges} />
  </Layout>
)

export default IndexPage

export const airTable = graphql`
  query AirTableQuery {
    allAirtable {
      edges {
        node {
          data {
            Name
            Category
            Url
          }
        }
      }
    }
  }
`
