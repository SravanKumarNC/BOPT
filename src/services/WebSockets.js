const sendData = (message) => {
  const ws = new WebSocket("ws://192.168.34.135:8765");

  ws.onopen = () => {
    console.log("connected to websocket server");
    ws.send(message);
  };

  ws.onmessage = (event) => {
    console.log(event.data);
  };
  ws.onerror = (error) => {
    console.log("Websocket error :", error);
  };
};
export default sendData;
