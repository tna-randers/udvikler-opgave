const Node = {
  "id": "2067be3a19425210",
  "type": "template",
  "z": "6bfba71ac52becce",
  "name": "SQL",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 770,
  "y": 140,
  "wires": [
    [
      "ab5de41c73d29dc5"
    ]
  ],
  "_order": 155
}

Node.template = `
{{msg.sql}}

`

module.exports = Node;