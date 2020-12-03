import React from 'react'

interface IProps {
  nome: string
  textoNaHome: string
}

function HomeScreen({
  nome,
  textoNaHome = 'Ola monorepo',
}: IProps): JSX.Element {
  return (
    <div style={{ color: 'blue' }}>
      {nome ? <h1>Home Screen {nome}</h1> : <h1>Sem nome</h1>}
      <h2>{textoNaHome}</h2>
    </div>
  )
}

export default HomeScreen
