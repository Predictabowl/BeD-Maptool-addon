[h: spellName = json.get(macro.args,"spellName")]
[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: bOpp = json.get(macro.args,"isOpport")]
[h: iArma = json.get(macro.args, "arma")]
[h: sSpellMacro = json.get(macro.args, "spellMacro")]
[h: sOrigine = json.get(macro.args, "origine")]
[h: bIsAttack = json.get(macro.args, "isAttack")]
[h: switchToken(source)]

[h: spellTags = fetchSpellProp(spellName,"tags")]
[h, if(listContains(spellTags,"PRECAST")), code:{
	[macro("powers/spells/"+spellName+"/spellPreCast@"+getMacroLocation()): json.set("","source",source)]
	[extraParam = macro.return]
};{
	[extraParam = ""]
}]

[macro("powers/getSpellOrigine@this"): json.append(source,spellName)]
[h: sOrigine = macro.return]

[h: msgOutput = ""]
<!-- il campo tipoAttacco è deprecato, ma non so se qualcuno lo usa quindi lo lascio -->
[h: oEventParam = json.set("","tipo","SPELL","spellName",spellName,"extraParam",extraParam, "arma", iArma, "isOpp", bOpp)]
[r, foreach(id, target), CODE:{
	[delUltimoCritico(source)]
	[sTargetMsg = ""]
	[macro("powers/isTargetLegal@this"):id]
	[bIsLegal = macro.return]
	[bHittable = macro.return]
	[if (bIsLegal == 1), code:{
		[sTargetMsg= strformat("Bersaglio: <b>%s</b>",getName(id))]
		[macro("events/runEvents@this"): json.set("","source",source,"target",id,"event","On_Spellcast_at","eventParam",oEventParam)]
		[macro("events/runEvents@this"): json.set("","source",id,"target",source,"event","On_Spellcasted","eventParam",oEventParam)]
	}]
	[h, if(bOpp == 1 && bIsLegal), code:{
		[macro("events/runEvents@this"): json.set("","source",source,"target",id,
			"event","On_Opportunita","eventParam",oEventParam)]
	}]
	[h, if(bIsAttack == 1 && bIsLegal == 1), code:{
		[macro("events/runEvents@this"): json.set("","source",source,"target",id,"event","On_Attack","eventParam",oEventParam)]
		[macro("events/runEvents@this"): json.set("","source",id,"target",source,
			"event","On_Attacked","eventParam",oEventParam)]
	}]
	[if (bIsLegal == 1) , code:{
		[macro("powers/isHittable@this"):json.append(source,id,spellName,bOpp)]
		[h: bHittable = macro.return]
		[macro("utility/popMessaggio@this"):json.set("","token",source,"key","hittableResult")]
		[if(macro.return != ""): msgOutput = msgOutput+macro.return]
	}]
	[if(bHittable): bCrit = rollCriticoSpell(source,spellName); bCrit = 0]
	[if (bCrit), code:{
		[macro("events/runEvents@this"):json.set("","event","On_Critical","source",source,"target",id,"eventParam",oEventParam)]		
	}]
	[h, if(bIsAttack == 1 && bHittable == 1), code:{
		[macro("events/runEvents@this"):json.set("","event","On_Hit","source",source,"target",id,"eventParam",oEventParam)]
		[macro("events/runEvents@this"):json.set("","event","On_Hitted","source",id,"target",source,"eventParam",oEventParam)]
	}]
	[if(bHittable == 1), code:{
		[macro(sSpellMacro): json.set("","source",source,"target",id,"origine",sOrigine,"isOpport",bOpp,"extraParam",extraParam,"targetList",target)]
		[discoverResistenzaBersaglio(spellName,source,id)]
	}]

	[if(bIsLegal), code:{
		[macro("powers/generaSpellMsg@this"):json.append(source,id)]
		[h:msgOutPut= msgOutput+"<div style='border: 1px; border-style: dashed hidden dashed hidden;'>"+sTargetMsg+"<br>"+popMessaggio(source,"strPotere")+"</div>"]
		[clearStatModifiers(id)]	
	}]
	[clearStatModifiers(source)]
}]

[h: appendMessaggio(source,"processSpellEffect",msgOutput)]



















