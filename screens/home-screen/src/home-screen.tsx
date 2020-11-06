import React from 'react'

interface IProps {
  name: string
}

function HomeScreen({ name }: IProps): JSX.Element {
  return (
    <div>
      <h1>Home Screen {name}</h1>
    </div>
  )
}

export default HomeScreen
