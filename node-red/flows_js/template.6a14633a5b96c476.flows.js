const Node = {
  "id": "6a14633a5b96c476",
  "type": "template",
  "z": "6bfba71ac52becce",
  "g": "5802aaf185ad96e3",
  "name": "Drop Table",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 370,
  "y": 720,
  "wires": [
    []
  ],
  "_order": 134
}

Node.template = `
DROP TABLE folketal_civilstand
`

module.exports = Node;