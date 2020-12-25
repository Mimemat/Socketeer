import Ws from 'ws'

export type onMsgFunc = (msg: string, sentAt: string) => unknown
export type onOpenFunc = (ws: Ws) => unknown
export type onCloseFunc = (ws: Ws, code: number, reason: string) => unknown

export interface IWsArgs {
  url: string
  onMsg?: onMsgFunc
  onOpen?: onOpenFunc
  onClose?: onCloseFunc
  onError?: (err: Error) => void
}

export class Websocket {
  private ws: Ws;

  connect ({ url, onMsg, onOpen, onClose, onError = console.error }: IWsArgs): void {
    this.ws = new Ws(url)
    this.ws.on('open', () => {
      onOpen && onOpen(this.ws)
    })

    this.ws.on('error', (err) => {
      onError(err)
    })

    this.ws.on('close', (code, reason) => {
      onClose && onClose(this.ws, code, reason)
    })

    this.ws.on('message', (data) => {
      onMsg && onMsg(data.toString(), new Date().toISOString())
    })
  }

  send (message: string): void {
    this.ws.send(message)
  }
}
