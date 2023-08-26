const Node = {
  "id": "17ceab5562fbf145",
  "type": "template",
  "z": "6bfba71ac52becce",
  "g": "5802aaf185ad96e3",
  "name": "Create Table",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 410,
  "y": 540,
  "wires": [
    []
  ],
  "_order": 143
}

Node.template = `
CREATE TABLE folketal_civilstand (
    recordID int NOT NULL AUTO_INCREMENT,
    antal int,
    køn varchar(255),
    civilstand varchar(255),
    alder varchar(255),
    tid varchar(255),
    område varchar(255),
    PRIMARY KEY (tableID)
);
`

module.exports = Node;