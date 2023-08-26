const Node = {
  "id": "68b02bedd3b065cf",
  "type": "change",
  "z": "6bfba71ac52becce",
  "g": "967e06bf79433764",
  "name": "forbered POST request\\n fra api.statbank.dk",
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
  "x": 770,
  "y": 300,
  "wires": [
    [
      "2567cd922fefca47"
    ]
  ],
  "_order": 126
}

module.exports = Node;