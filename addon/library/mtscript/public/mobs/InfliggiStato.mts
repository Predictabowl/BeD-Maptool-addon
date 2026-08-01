[h: id = macro.args]
[h: stateList = json.sort(getTokenStates("json"))]
[h: control =  input("stato|"+json.toList(stateList)+"|Stato|LIST","durata|2") ]
[h: abort(control)]
[h: stato = json.get(stateList,stato)]
[h: nameMacro = "getParamStato@Lib:Poteri"]
[macro(nameMacro): json.append(id,durata,stato)]
[h: parameters = macro.return]
[macro("core/ApplyEffect@this"): parameters]


