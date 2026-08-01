[h: target = json.get(macro.args,"target")]
[h: durata = json.get(macro.args,"durata")]
[h: effetto = json.get(macro.args,"effetto")]

[h: param = json.set("","target",target)]
[h: param = json.set(param,"durata",durata)]
[h: param = json.set(param,"effetto",effetto)]
[h: param = json.set(param,"stato",effetto)]
[h: param = json.set(param,"subito",1)]
[h: param = json.set(param,"potenza","null")]
[h: param = json.set(param,"tipo","null")]

[h: macro.return = param]