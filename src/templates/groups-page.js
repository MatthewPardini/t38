import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

export const GroupsPageTemplate = () => {
  return (
    <div>hello</div>
  )
}

GroupsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const GroupsPage = () => {
  return (
    <Layout>
      <GroupsPageTemplate />
    </Layout>
  )
}

GroupsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default GroupsPage
