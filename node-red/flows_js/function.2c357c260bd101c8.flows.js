const Node = {
  "id": "2c357c260bd101c8",
  "type": "function",
  "z": "6bfba71ac52becce",
  "g": "22c917067368d3cc",
  "name": "JSON.stringify",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 740,
  "y": 680,
  "wires": [
    [
      "3722df3c2bb6c2ea"
    ]
  ],
  "_order": 160
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const jsonData = JSON.stringify(msg.payload);
  
  msg.payload = jsonData;
  return msg;
}

module.exports = Node;