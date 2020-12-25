import React, { useEffect, useState } from 'react'
import { Websocket } from '../services/ws/Websocket'
import Header from './Header'
import { Container } from './styles'

const websocket = new Websocket()

const Screen: React.FC = () => {
  const [msgs, setMsgs] = useState<string[]>([])

  useEffect(() => {
    websocket.connect({
      url: 'ws://localhost:3333',
      onMsg: (data) => setMsgs(oldMgs => [...oldMgs, data]),
      onError: () => alert('Bad url')
    })
  }, [])

  return (
    <Container>
      <Header />
      {msgs.map((msg, index) => <p key={index}>{msg}</p>)}
    </Container>
  )
}

export default Screen
