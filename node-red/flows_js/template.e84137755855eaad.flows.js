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
  "x": 420,
  "y": 440,
  "wires": [
    [
      "ba4890cc238d65fe"
    ]
  ],
  "_order": 146
}

Node.template = `
DESC folketal_civilstand;
`

module.exports = Node;