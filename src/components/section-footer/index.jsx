import PropTypes from 'prop-types'
import React, { memo } from 'react'

const SectionFooter = memo((props) => {

    const {name} = props

  return (
    <div>SectionFooter</div>
  )
})

SectionFooter.propTypes = {
    name:PropTypes.string
}

export default SectionFooter