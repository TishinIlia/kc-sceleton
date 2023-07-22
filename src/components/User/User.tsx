import React, { FC } from 'react'

import IUser from '../../types/User'
import Image from '../Image/Image'
import './User.css'

const User: FC<Omit<IUser, 'id'>> = ({ email, first_name: firstName, last_name: lastName, avatar }) => {
  return (
    <article className="user">
      <div className="user__avatar">
        <Image src={avatar} alt={`${firstName} ${lastName} avatar`} className="user__image" />
      </div>
      <div className="user__info">
        <div className="user__name">
          {firstName} {lastName}
        </div>
        <div className="user__email">{email}</div>
      </div>
    </article>
  )
}

export default User
