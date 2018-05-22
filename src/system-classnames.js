import React from 'react'
import map from 'system-classnames/primer'
import classnames from 'classnames'

const mapWithClassnames = (props, classes) => {
  const {className, ...mapped} = map(props)
  const otherClasses = (typeof classes === 'function')
    ? classes(props)
    : classes
  return Object.assign(mapped, {className: otherClasses})
}

const classedFactory = (Component, classes) => {
  return ({className, ...props}) => {
    return (
      <Component {...mapWithClassnames(props, classes)} />
    )
  }
}

export default mapWithClassnames
export {classedFactory}
