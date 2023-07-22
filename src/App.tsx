import React, { FC, useEffect, useState } from 'react'

import './styles.css'
import { repeat } from './utils/utils'
import IUser from './types/User'
import User from './components/User/User'
import UserSkeleton from './components/User/UserSkeleton'

const App: FC = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const perPage = 6

  useEffect(() => {
    setLoading(true)
    fetch(`https://reqres.in/api/users?per_page=${perPage}`)
      .then((res) => res.json())
      .then((data) => setUsers(data.data as IUser[]))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [])

  if (error) {
    return null
  }

  if (loading) {
    return (
      <section className="container">
        {repeat((i) => {
          return <UserSkeleton key={i} />
        }, perPage)}
      </section>
    )
  }

  return (
    <section className="container">
      {users.map(({ id, avatar, last_name: lastName, first_name: firstName, email }) => (
        <User key={id} avatar={avatar} last_name={lastName} first_name={firstName} email={email} />
      ))}
    </section>
  )
}

export default App
