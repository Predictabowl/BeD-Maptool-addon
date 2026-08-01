[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]
[h: spellName = json.get(macro.args,2)]
[h, if(argCount()>3): bOpp = arg(3); bOpp = 0]

[macro("powers/checkSpellRange@this"):json.append(source,target,spellName)]
[h, if(macro.return == 0), code:{
	[msgOutput= strformat("%{msgOutput}<br>Il bersaglio &egrave fuori portata <br><br>",getName(target))]
	[setMessaggio(source, "hittableResult", msgOutput]
	[return(0,0)]
}]

[macro("powers/avoidSpellDefenses@this"): macro.args]
[h: oMacroRes = macro.return]

[h: sAoEShape = upper(getAoEShape(spellName, source))]
[h, if(sAoeSHAPE == "CATENA"), code:{
	[macro("powers/setOrigineAlt@this"): json.append(source,target)]
	[addSpellStartData(source, "origineAlternativa",1)]
}]

[h: macro.return = oMacroRes]