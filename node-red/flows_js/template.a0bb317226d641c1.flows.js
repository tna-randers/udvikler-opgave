const Node = {
  "id": "a0bb317226d641c1",
  "type": "template",
  "z": "6bfba71ac52becce",
  "g": "967e06bf79433764",
  "name": "SQL",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 610,
  "y": 140,
  "wires": [
    [
      "cdc5cee98b5b60b1"
    ]
  ],
  "_order": 144
}

Node.template = `
{{msg.sql}}


`

module.exports = Node;