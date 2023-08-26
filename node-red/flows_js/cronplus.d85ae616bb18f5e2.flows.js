const Node = {
  "id": "d85ae616bb18f5e2",
  "type": "cronplus",
  "z": "6bfba71ac52becce",
  "name": "Automatiskl\\n opdatering",
  "outputField": "payload",
  "timeZone": "",
  "persistDynamic": false,
  "commandResponseMsgOutput": "output1",
  "outputs": 1,
  "options": [
    {
      "name": "k1",
      "topic": "topic1",
      "payloadType": "default",
      "payload": "",
      "expressionType": "cron",
      "expression": "  0 0 7 1 *",
      "location": "",
      "offset": "0",
      "solarType": "all",
      "solarEvents": "sunrise,sunset"
    },
    {
      "name": "k2",
      "topic": "topic2",
      "payloadType": "default",
      "payload": "",
      "expressionType": "cron",
      "expression": "  0 0 7 4 *",
      "location": "",
      "offset": "0",
      "solarType": "all",
      "solarEvents": "sunrise,sunset"
    },
    {
      "name": "k3",
      "topic": "topic3",
      "payloadType": "default",
      "payload": "",
      "expressionType": "cron",
      "expression": "  0 0 7 7 *",
      "location": "",
      "offset": "0",
      "solarType": "all",
      "solarEvents": "sunrise,sunset"
    },
    {
      "name": "k4",
      "topic": "topic4",
      "payloadType": "default",
      "payload": "",
      "expressionType": "cron",
      "expression": "  0 0 7 10 *",
      "location": "",
      "offset": "0",
      "solarType": "all",
      "solarEvents": "sunrise,sunset"
    }
  ],
  "x": 90,
  "y": 220,
  "wires": [
    [
      "292405a4304ecc72"
    ]
  ],
  "_order": 155
}

module.exports = Node;