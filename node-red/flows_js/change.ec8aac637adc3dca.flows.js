const Node = {
  "id": "ec8aac637adc3dca",
  "type": "change",
  "z": "539fe1a166d2a692",
  "name": "forbered POST request\\n til api.statbank.dk",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "https://api.statbank.dk/v1/data",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "method",
      "pt": "msg",
      "to": "POST",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 550,
  "y": 340,
  "wires": [
    [
      "2a9944428949e3f3"
    ]
  ],
  "_order": 91
}

module.exports = Node;