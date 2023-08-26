const Node = {
  "id": "e84137755855eaad",
  "type": "template",
  "z": "6bfba71ac52becce",
  "g": "5802aaf185ad96e3",
  "name": "Describe Table",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 380,
  "y": 580,
  "wires": [
    [
      "ba4890cc238d65fe"
    ]
  ],
  "_order": 133
}

Node.template = `
DESC folketal_civilstand;
`

module.exports = Node;