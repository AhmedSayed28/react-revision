import React from 'react'

type headerProps = {
  text: string
}
function Header({text}:headerProps) {
  return (
    <h1>{text}</h1>
  )
}

export default Header