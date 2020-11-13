'use strict'

import { ContactScreen } from '@rcl/html'
import HomeScreen from '@rcl/home-screen/html-dist'

const divContact = document.createElement('div')
document.body.append(divContact)
ContactScreen.mount(divContact, { contact: 123456789 })

const divHome = document.createElement('div')
document.body.append(divHome)
HomeScreen.mount(divHome, { name: 'pedrou' })
