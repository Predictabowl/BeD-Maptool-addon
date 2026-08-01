[h: spellToken = json.get(macro.args,"spellToken")]
[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: critRes = json.get(macro.args,"critRes")] <!-- opzionale -->
[h: iCD  = json.get(macro.args,"CD")] <!-- opzionale -->
[h: sElemento = json.get(macro.args,"elemento")] <!-- opzionale -->

[h, if (critRes == "" && iCD == ""), code:{
	[macro("combat/getUltimoCritico@this"):source]
	[h: critRes = macro.return]
}]

[h, if(iCD == ""): iCD = getSpellCD(json.set("","source",source,"target",target,"spellName",spellToken,"critRes",critRes))]

[h,if(sElemento == ""), code:{
	[sElemento = getSpellElement(json.set("","source",source,"target", target, "spellName",spellToken))]
}]

[macro("powers/getSpellTSModifier@this"): json.set("","source",source,"target",target,"spellName",spellToken,"elemento",sElemento)]
[h: iTSMod = macro.return]

[h: rollResult = 1d20]
[h: iTSResult = rollResult + iTSMod]
[h: strOut = strformat("1d20 (%{rollResult}) %+d = <b> %{iTSResult}</b>",iTSMod)]
[h: TStype = getLibProperty("TS",spellToken)]


[h: msgOutput = strformat("%s effettua un Tiro Salvezza ( %{TStype}, %{sElemento}), %{strOut} contro CD %{iCD}: ",getName(target))]
[h: flag = 0]
[h, if(rollResult == 20), code:{
	[flag = 1]
}]

[h, if(iCD <= iTSResult && rollResult != 1), code:{
	[flag = 1]
}]

[h: popStatModifier(target,"CriticalFailTS")]

[h, if(flag), code:{
	[msgOutput = msgOutput + "<span style='color:green;font-weight:bold;'> Successo </span>"]		
	[appendMessaggio(target,"TSResult",msgOutput)]
	[return(0,1)]
}]

[h, if(iCD - iTSResult > 12), code:{
	[msgOutput = msgOutput +
		"<span style='color:red;font-weight:bold;font-style:italic'> Fallimento Critico </span>"]
	[pushStatModifier(target,"CriticalFailTS",1)]
};{
	[msgOutput = msgOutput + 
		"<span style='color:red;font-weight:bold;'> Fallimento </span>"]		
}]

[h: appendMessaggio(target,"TSResult",msgOutput)]
[h: macro.return = 0]

