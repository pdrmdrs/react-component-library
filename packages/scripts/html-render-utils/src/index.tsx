import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

export type HTMLComponent = {
  mount: (container: Element | DocumentFragment, props: unknown) => void
  unmount: (container: Element | DocumentFragment) => void
}

export function exportComponent(Component: React.ElementType): HTMLComponent {
  return {
    mount: (container: Element | DocumentFragment, props: unknown) =>
      render(<Component {...props} />, container),
    unmount: (container: Element | DocumentFragment) =>
      unmountComponentAtNode(container),
  }
}
