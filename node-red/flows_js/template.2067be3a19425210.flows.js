const Node = {
  "id": "2067be3a19425210",
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
  "y": 400,
  "wires": [
    [
      "ab5de41c73d29dc5"
    ]
  ],
  "_order": 150
}

Node.template = `
{{msg.sql}}

`

module.exports = Node;