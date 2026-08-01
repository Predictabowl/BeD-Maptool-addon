[h: source = json.get(macro.args,0)]
[h: PVTid = json.get(macro.args,1)]

[h: switchToken(source)]
[h, if(json.type(PV_Temporanei) != "OBJECT"): PV_Temporanei="{}"]
[h: PV_Temporanei = json.remove(PV_Temporanei,PVTid)]

[macro("core/updatePVTScheda@this"): source]