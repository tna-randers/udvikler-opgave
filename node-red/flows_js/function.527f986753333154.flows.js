const Node = {
  "id": "527f986753333154",
  "type": "function",
  "z": "539fe1a166d2a692",
  "name": "Create table",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 250,
  "y": 260,
  "wires": [
    [
      "0cd549b7b8fd82e1"
    ]
  ],
  "_order": 95
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.sql = `CREATE TABLE ${msg.tableName} 
  (recordID INT NOT NULL AUTO_INCREMENT, 
  antal INT, køn VARCHAR(255), 
  civilstand VARCHAR(255), 
  alder VARCHAR(255), 
  tid VARCHAR(255), 
  område VARCHAR(255), 
  PRIMARY KEY (recordID))`;
  
  return msg;
}

module.exports = Node;