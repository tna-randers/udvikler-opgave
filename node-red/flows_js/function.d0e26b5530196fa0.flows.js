const Node = {
  "id": "d0e26b5530196fa0",
  "type": "function",
  "z": "6bfba71ac52becce",
  "g": "967e06bf79433764",
  "name": "Drop table",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 470,
  "y": 140,
  "wires": [
    [
      "a0bb317226d641c1"
    ]
  ],
  "_order": 141
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.sql = `DROP TABLE IF EXISTS ${msg.tableName}`;
  
  return msg;
}

module.exports = Node;