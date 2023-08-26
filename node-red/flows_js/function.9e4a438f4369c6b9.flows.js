const Node = {
  "id": "9e4a438f4369c6b9",
  "type": "function",
  "z": "6bfba71ac52becce",
  "g": "967e06bf79433764",
  "name": "Create table",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 470,
  "y": 200,
  "wires": [
    [
      "bcc140f415b84643"
    ]
  ],
  "_order": 145
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