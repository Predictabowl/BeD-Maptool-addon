[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]
[h, if(json.length(macro.args) > 2): bOpp = json.get(macro.args,2); bOpp = 0]

[h, if(isIndifeso(target)), code:{
	[macro("combat/setUltimaDifesa@this"): json.append(source,0)]
	[return(0, 0)]
}]

[macro("utility/getTipoDifesa@this"): target]
[h: tipoDif = macro.return]
[r, if (tipoDif == "Parare"), code:{
	[h: macroCall = "testParare@this"]
	[h: return = "parato"]
};{
	[h: macroCall = "testSchivare@this"]
	[h: return = "schivato"]
}]

[h: param = json.set("","target",target,"source",source,"opportunita",bOpp)]
[macro(macrocall): param]
[h: result = json.get(macro.return,"result")]
[h: mod = json.get(macro.return,"mod")]
[h: dado = json.get(macro.return,"dado")]
[h: sRisultati = json.get(macro.return,"ogniTiro")]

[h, if(result==0), code:{
	[return ="fallimento"]
	[macro("core/verbosePrint@this"):upper(return,1)]
	[uRes = macro.return]
};{
	[uRes = "SUCCESSO"]
}]

[h: switchToken(source)]
[h: tot = mod+dado]
[h: message = strformat("%{tipoDif}: <span title='%s%+d = %d'>%{uRes}</span>&nbsp;",string(sRisultati),round(mod),round(tot))]
[macro("core/verbosePrint@this"):message]
[macro("utility/setMessaggio@this"):json.set("","token",source,"key","difesaResult","msg",macro.return)]

[macro("combat/setUltimaDifesa@this"): json.append(source,return)]
[h: macro.return = return]
