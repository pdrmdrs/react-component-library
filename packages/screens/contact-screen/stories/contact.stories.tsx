import React from 'react'
import ContactScreen from '../src'

export const Primary = () => <ContactScreen />

export const withContact = () => <ContactScreen contact={123123123} />

export default {
  title: 'Contact Screen',
}
