const Node = {
  "id": "0cd549b7b8fd82e1",
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
  "y": 260,
  "wires": [
    [
      "a6a21d77d030d5bf"
    ]
  ],
  "_order": 96
}

Node.template = `
{{msg.sql}}

`

module.exports = Node;