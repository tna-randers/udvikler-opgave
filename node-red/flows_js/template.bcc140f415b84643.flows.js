const Node = {
  "id": "bcc140f415b84643",
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
  "y": 200,
  "wires": [
    [
      "6f480e7d1d5ac67c"
    ]
  ],
  "_order": 146
}

Node.template = `
{{msg.sql}}

`

module.exports = Node;