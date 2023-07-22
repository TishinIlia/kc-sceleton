import React, { FC } from 'react'
import classNames from 'classnames'

import './SkeletonText.css'
import { repeat } from '../../utils/utils'

interface SkeletonTextProps {
  rowsCount?: number
  dark?: boolean
}

const SkeletonText: FC<SkeletonTextProps> = ({ dark = false, rowsCount = 1 }: SkeletonTextProps) => {
  return (
    <div
      className={classNames('skeleton-text', {
        'skeleton-text--dark': dark,
      })}
    >
      {repeat((i) => {
        return <span key={i} className="skeleton-text__row skeleton-gradient" />
      }, rowsCount)}
    </div>
  )
}

export default SkeletonText
