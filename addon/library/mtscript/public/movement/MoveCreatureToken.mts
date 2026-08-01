[h: source = macro.args]

[h: setInMemoria(source, "isTokenMoving", 1)]
[macro("movement/checkDenyMove@this"):source]
[h: flag = macro.return]
[r, if (flag == 0), code: {
	[h: usedMov = getMoveCount()]
	[macro("powers/updateAllAura@this"):json.append(source,usedMov)]
}]
[h: delDaMemoria(source, "isTokenMoving")]

[h: macro.return = flag]