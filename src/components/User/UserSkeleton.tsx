import React, { FC } from 'react'
import classNames from 'classnames'

import SkeletonText from '../SkeletonText/SkeletonText'
import Image from '../Image/Image'
import './User.css'

interface UserSkeletonProps {
  className?: string
}

const User: FC<UserSkeletonProps> = ({ className }) => {
  return (
    <article className={classNames(['user', 'user--skeleton', className])}>
      <div className="user__avatar">
        <Image skeleton className="user__image" />
      </div>
      <div className="user__info">
        <div className="user__name">
          <SkeletonText />
        </div>
        <div className="user__email">
          <SkeletonText />
        </div>
      </div>
    </article>
  )
}

export default User
