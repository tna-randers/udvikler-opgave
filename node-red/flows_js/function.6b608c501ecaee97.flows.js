const Node = {
  "id": "6b608c501ecaee97",
  "type": "function",
  "z": "539fe1a166d2a692",
  "name": "Opsætning af JSON krop",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 290,
  "y": 340,
  "wires": [
    [
      "ec8aac637adc3dca"
    ]
  ],
  "_order": 90
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
  
  //Assignment af ALDER værdier
  msg.payload.variables[2].values = cachedAlderArray;
  return msg;
}

module.exports = Node;