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
  "x": 410,
  "y": 580,
  "wires": [
    []
  ],
  "_order": 147
}

Node.template = `
DROP TABLE msg.tableName
`

module.exports = Node;