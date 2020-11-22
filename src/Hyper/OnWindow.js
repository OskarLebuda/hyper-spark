export default function (browserWindow) {
    browserWindow.rpc.on('hyper-spark execute commands', ({ uid, cmd }) => {
      browserWindow.sessions.get(uid).pty.write(`${cmd}\n`);
    })
  }