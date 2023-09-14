import { type } from 'os'
import React from 'react'


type footerProps = {
  text: string
}
function Footer({text}:footerProps) {
  return (
    <h1>{text}</h1>
  )
}

export default Footer