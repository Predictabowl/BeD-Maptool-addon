[h: target = json.get(macro.args,"target")]
[h: source = json.get(macro.args,"source")]
[h: danno = json.get(macro.args,"danno")]

[h: danno = roundRoll(danno/3)]
[h: macro.return = danno]
