[h: iLP = json.get(macro.args,"LP")]
[h: dmgLP = json.get(macro.args,"dmgLP")]
[h: target = json.get(macro.args,"target")]
[h: source = json.get(macro.args,"source")]

[h: difesa = json.get(macro.args,"difesa")] <!-- Opzionale -->
[h: bCritRes = json.get(macro.args,"critico")] <!-- Opzionale -->
[h: fPCrit = json.get(macro.args,"potenzaCritico")] <!-- Opzionale -->
[h: dmgPerc = json.get(macro.args,"percMod")] <!-- opzionale -->
[h: iCritFailTS = json.get(macro.args,"critFailTS")] <!-- opzionale -->

[h, if(!isNumber(iCritFailTS)): iCritFailTS = getStatModifier(target,"CriticalFailTS")]

[h, if(!isNumber(bCritRes)): bCritRes = getUltimoCritico(source)]
[h, if (!isNumber(fPCrit)): fPCrit = getPCrit(source)]
[h, if(!isNumber(dmgPerc)): dmgPerc = getModDmgPerc(source,target)]
[h, if(dmgPerc == ""): dmgPerc = 1]

[h, if(difesa=="" && source!=""), code:{
	[macro("combat/getUltimaDifesa@this"):source]
	[h: difesa = macro.return]
}]

[h, if(json.contains(macro.args,"baseDmg") == 0), code:{
	[h: dmgBase = "0"]
};{
	[h: dmgBase = json.get(macro.args,"baseDmg")]
}]

[h: sRolledDice = ""]
[h: result = 0]
[h, for(i,0,iLP), code:{
	[fRolled = eval(string(dmgLP))]
	[sRolledDice = listAppend(sRolledDice, fRolled)]
	[result = result + fRolled]
}]
[h: appendMessaggio(target,"spellRolledDice",sRolledDice)]


[h: dmgBase = eval(string(dmgBase))]
[h: result = (result + dmgBase) * dmgPerc]
[h, if(bCritRes == 1), code:{
	[result = result * (1+fPCrit/100)]
}]

[h: param = json.set("","target",target,"source",source,"danno",result)]

[r, if(difesa == "schivato"),code:{
	Qua dentro non si dovrebbe mai entrare, quindi per ora lo lascio stare
	[macro("combat/getSchivareDmg@this"):param]
	Schivato 
	[h: value = result - macro.return]
	[h: result = macro.return]
	[h: message = "(danni schivati: "+value+") <br>"]
	[macro("core/verbosePrint@this"):message]

};{}]

[r, if(difesa == "parato"), code:{
	[macro("combat/getBloccoDmg@this"):param]	
	[h: value = floor(result - macro.return)]
	[h: result = macro.return]
	[h: message = strformat("(danni parati: %d)",value)]
	[macro("core/verbosePrint@this"):message]
	[h: message = macro.return]
	[macro("utility/setMessaggio@this"):json.set("","token",source,"key","riduzioneDanni","msg",message)]
};{}]

[h: return(0,roundRoll(result))]
