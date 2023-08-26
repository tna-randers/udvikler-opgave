const Node = {
  "id": "0a68e1a8abf55099",
  "type": "function",
  "z": "6bfba71ac52becce",
  "g": "967e06bf79433764",
  "name": "Opsætning af JSON krop",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 510,
  "y": 300,
  "wires": [
    [
      "68b02bedd3b065cf"
    ]
  ],
  "_order": 125
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  //Cache en range af ALDER værdier
  let minAlder = 20;
  let maxAlder = 90;
  let cachedAlderArray = [];
  for (let i = minAlder; i < maxAlder + 1; i++) {
      cachedAlderArray.push(i.toString());
  }
  
  //Initialiserer ny payload, klargjort til POST
  msg.payload = {
      "table": "FOLK1A",
      "format": "CSV",
      "variables": []
  };
  
  //Assignment af variables OMRÅDE, KØN, CIVILSTAND
  msg.payload.variables = [
      {
          "code": "OMRÅDE",
          "values": [
              "730"
          ]
      },
      {
          "code": "KØN",
          "values": [
              "1",
              "2"
          ]
      },
      {
          "code": "ALDER",
          "values": []
      },
      {
          "code": "CIVILSTAND",
          "values": [
              "u",
              "g",
              "e",
              "f"
          ]
      }
  ];
  
  //Assignment af ALDER og Tid variables
  msg.payload.variables[2].values = cachedAlderArray;
  return msg;
}

module.exports = Node;