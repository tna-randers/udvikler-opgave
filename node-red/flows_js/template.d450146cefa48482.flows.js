const Node = {
  "id": "d450146cefa48482",
  "type": "template",
  "z": "539fe1a166d2a692",
  "name": "SQL",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 390,
  "y": 200,
  "wires": [
    [
      "7475f39b23448981"
    ]
  ],
  "_order": 94
}

Node.template = `
{{msg.sql}}


`

module.exports = Node;