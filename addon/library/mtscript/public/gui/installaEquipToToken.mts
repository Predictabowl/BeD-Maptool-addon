[h: oToken = json.get(macro.args,"token")]


[h: oParam = json.set("","idDB",json.get(macro.args,"idDB"),"categoria",json.get(macro.args,"categoria"))]
[macro("mobs/installaEquip@this"): json.append(oToken,oParam)]