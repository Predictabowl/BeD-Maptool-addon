[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]
[h: sAuraId = json.get(macro.args,2)]
[h: switchToken(source)]

[oAura = json.get(Aure_Attive,sAuraId)]
	
[sMacro = json.get(oAura,"macro")]
[oParam = json.get(oAura,"param")]
[oParam = json.set(oParam,"target",target,"source",source)]
[macro("powers/isEffectedByAura@this"): json.append(target,oAura)]
[if(macro.return == 0): oParam = json.set(oParam,"remove",1)]
[macro(sMacro):oParam]
[h: msgOut = macro.return]
<!-- Soluzione temporanea, si dovrebbero usare i log per i messaggi-->
[h, if(msgOut != ""): broadcast(string(msgOut))]

<!-- In uscita ci sono i messaggi lasciati dalla macro sMacro -->
[h: macro.return = msgOut]