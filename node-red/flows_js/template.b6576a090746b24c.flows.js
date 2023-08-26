const Node = {
  "id": "b6576a090746b24c",
  "type": "template",
  "z": "6bfba71ac52becce",
  "g": "5802aaf185ad96e3",
  "name": "Show Tables",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 410,
  "y": 480,
  "wires": [
    [
      "ba4890cc238d65fe"
    ]
  ],
  "_order": 145
}

Node.template = `
SHOW TABLES
`

module.exports = Node;