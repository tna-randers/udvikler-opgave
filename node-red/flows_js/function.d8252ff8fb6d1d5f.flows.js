const Node = {
  "id": "d8252ff8fb6d1d5f",
  "type": "function",
  "z": "6bfba71ac52becce",
  "g": "967e06bf79433764",
  "name": "Insert data",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 470,
  "y": 400,
  "wires": [
    [
      "2067be3a19425210"
    ]
  ],
  "_order": 149
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const dataValues = msg.payload.map(item =>`('${item['INDHOLD']}',
                                              '${item['KØN']}', 
                                              '${item['ALDER']}', 
                                              '${item['CIVILSTAND']}', 
                                              '${item['TID']}', 
                                              '${item['OMRÅDE']}')`).join(', ');
  
  msg.sql = `INSERT INTO folketal_civilstand (antal, køn, civilstand, alder, tid, område)
   VALUES ${dataValues}`;
  
  return msg;
}

module.exports = Node;