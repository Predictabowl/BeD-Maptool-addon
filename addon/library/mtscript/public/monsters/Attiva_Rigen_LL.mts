[h: target = json.get(macro.args,"target")]
[h: power = json.get(macro.args,"power")]


[h: param = json.set("","target",target)]
[h: param = json.set(param,"durata",-1)]
[h: param = json.set(param,"effetto","Rigenerazione_Naturale")]
[h: param = json.set(param,"subito",1)]
[h: param = json.set(param,"stato","")]
[h: param = json.set(param,"potenza",power)]
[h: param = json.set(param,"tipo","Nascosto")]

[h: param2 = json.set("","power",power)]
[h: temp = json.set("","tipo","macroCall","macroName","Rigenerazione_LL@"+getMacroLocation(),"parametri",param2)]
[h: altro = json.append("",temp)]
[h: param = json.set(param,"params",altro)]
[macro("core/ApplyEffect@this"):param]