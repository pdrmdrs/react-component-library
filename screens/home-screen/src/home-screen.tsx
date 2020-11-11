import React from 'react'

interface IProps {
  nome: string
}

function HomeScreen({ nome }: IProps): JSX.Element {
  return (
    <div>
      <h1>Home Screen {nome}</h1>
    </div>
  )
}

export default HomeScreen
