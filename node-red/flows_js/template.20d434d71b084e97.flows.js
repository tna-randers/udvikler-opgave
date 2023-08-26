const Node = {
  "id": "20d434d71b084e97",
  "type": "template",
  "z": "6bfba71ac52becce",
  "g": "22c917067368d3cc",
  "name": "Select Table",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 350,
  "y": 680,
  "wires": [
    [
      "85f505fa9cdc37d9"
    ]
  ],
  "_order": 166
}

Node.template = `
SELECT *
FROM folketal_civilstand
`

module.exports = Node;