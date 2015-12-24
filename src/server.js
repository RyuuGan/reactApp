'use strict';

import Server from 'socket.io';

export default function startServer(store) {
  console.log('Starting socket.io server at port 8090');
  const io = new Server().attach(8090);

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  io.on('connection', (socket) => {
    console.log('Client connected');
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });
}
