import React from 'react'

export const JiraIssuePreview = ({
  issue
}) => {
  const {
    title,
    summary,
    type,
    reporter,
    assignee,
    epic,
  } = issue

  return (
    <div>
      <div>Title: {title}</div>
      <div>Summary: {summary}</div>
      <div>Type: {type}</div>
      <div>reporter: {reporter}</div>
      <div>Assignee: {assignee}</div>
      <div>Epic Link: {epic}</div>
    </div>
  )
}