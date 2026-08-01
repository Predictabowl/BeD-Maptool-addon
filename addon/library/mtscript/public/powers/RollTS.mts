[h: target = json.get(macro.args,0)]
[h: type = upper(json.get(macro.args,1))]
[h: element = json.get(macro.args,2)]
[h: switchToken(target)]
[h: mod = 0]
[h, switch (type), code:
case "RIFLESSI":{
	[mod = TS_Rif]
	[macro("core/popStatModifier@this"): json.append(target,"TS_Rif")]
	[h: mod = mod +macro.return]
};
case "TEMPRA":{
	[mod = TS_Tem]
	[macro("core/popStatModifier@this"): json.append(target,"TS_Tem")]
	[h: mod = mod +macro.return]
};
case "VOLONTA":{
	[mod = TS_Vol]
	[macro("core/popStatModifier@this"): json.append(target,"TS_Vol")]
	[h: mod = mod +macro.return]
}]

[macro("core/popStatModifier@this"): json.append(target,"TS")]
[h: mod = mod +macro.return]

[h: roll = 1d20]
[h: str = "1d20 (" + roll + ") + "]
[macro("powers/getResistance@this"): json.append(target,element)]
[h: mod = mod + macro.return]
[h: ts = roll + mod]
[h: str = str + mod + " = <b>" +ts+"</b>"]

[h: macro.return = json.append(ts,roll,str)]