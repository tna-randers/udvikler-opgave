const Node = {
  "id": "9ddd615f3c6843c2",
  "type": "template",
  "z": "6bfba71ac52becce",
  "g": "5802aaf185ad96e3",
  "name": "Select Table",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 370,
  "y": 540,
  "wires": [
    [
      "ba4890cc238d65fe"
    ]
  ],
  "_order": 139
}

Node.template = `
SELECT *
FROM folketal_civilstand
`

module.exports = Node;