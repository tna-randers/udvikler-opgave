const Node = {
  "id": "044cb13d0d4a6f94",
  "type": "function",
  "z": "539fe1a166d2a692",
  "name": "Drop table",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 250,
  "y": 200,
  "wires": [
    [
      "d450146cefa48482"
    ]
  ],
  "_order": 93
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.sql = `DROP TABLE IF EXISTS ${msg.tableName}`;
  
  return msg;
}

module.exports = Node;