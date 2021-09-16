import React from 'react'
import PropTypes from 'prop-types'
import { JiraIssuePreview } from '../../components/JiraIssuePreview'

const IssuesPagePreview = (...allThemThings) => {
  console.log('FFFFF', allThemThings)
  const data = allThemThings[0].entry.getIn(['data']).toJS()

  if (data) {
    console.log("returning allThemThings", allThemThings)
    return (
      <JiraIssuePreview issue={{}} />
    )
  } else {
    return <div>Loading...</div>
  }
}

IssuesPagePreview.propTypes = {
  allThemThings: PropTypes.any,
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IssuesPagePreview
