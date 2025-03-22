const socket = new WebSocket('wss://your-websocket-url');

socket.onopen = () => {
    console.log('WebSocket connection established');
};

socket.onmessage = (event) => {
    console.log('Message from server:', event.data);
};

socket.onclose = () => {
    console.log('WebSocket connection closed');
};
