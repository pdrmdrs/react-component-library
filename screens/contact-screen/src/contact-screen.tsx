import React from 'react'

interface IProps {
  contact?: number
}

function ContactScreen({ contact }: IProps): JSX.Element {
  return (
    <div>
      <h1>Contact Screen OLA MUNDO!</h1>
      {contact ? <h2>Contato: {contact}</h2> : null}
    </div>
  )
}

export default ContactScreen
