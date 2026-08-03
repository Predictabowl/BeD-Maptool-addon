<!-- chiamando questa macro direttamente non viene terminata o interrotta l'azione -->
[h: source = json.get(macro.args,"source")]
[h: sItemName = json.get(macro.args,"itemName")]
[h: oUseParam = json.get(macro.args,"useParam")]

[h: switchToken(source)]

[h, if(json.contains(macro.args,"target") == 1), code:{
	[h: target = json.get(macro.args,"target")]
};{
	[macro("powers/getFinalTarget@this"):json.append(source,sItemName)]
	[h: target = macro.return]
}]

[h: bClearance = 1]
[macro("powers/safetyCheckHostile@this"): json.append(source,target,sItemName,1)]
[h, if(macro.return != 0), code:{
	[broadcast("Uso oggetto Sospeso",getPlayerName())]
	[return(0,1)]
}]


[macro("consumables/getUseItemPrice@this"): json.append(source,sItemName)]
[macro("core/payAction@this"): macro.return]
[h, if(!macro.return): return (0,1)]


[h: sDecName = getLibProperty("nome_decorativo",sItemName)]
[h: sImg = getImage(sItemName)]
[h: msgOutput = strformat("<table><td><img src='%{sImg}' width='35' height='35' /></td>")]
[h: msgOutput = strformat("%{msgOutput}<td><p style='font-size:medium; font-weight:bold'> %s: %{sDecName}</p></td></table>",getName(source))]

[macro("consumables/toxicHandler@this"): json.append(source,sItemName)]
[bToxicRes = macro.return]
<!-- WIP, non ci si fa nulla per ora...  -->


[h, if(!isAoESpell(sItemName)): target = listGet(target,0)]

[macro("powers/isAttack@this"): sItemName]
[h: bIsAttack = macro.return]

[h: sItemMacro = "itemEffect@"+sItemName]
[macro("combat/setUltimoCritico@this"): json.append(source,0)]

[h, foreach(id, target), CODE:{
	[if(msgOutput != ""): msgOutput=strformat("%{msgOutput}<br>")]
	[bIsLegal = isTargetLegale(id)]
	[bHittable = macro.return]
	[if (bIsLegal == 1), code:{
		[msgOutput= strformat("%{msgOutput}Bersaglio: <b>%s</b>",getName(id))]
		[oEventParam = json.set("","itemName",sItemName)]
		[macro("events/runEvents@this"): json.set("","source",id,"target",source,"event","On_Item_Used","eventParam",oEventParam)]
		[msgOutput = msgOutput + popMessaggio(id,"msgEventOn_Item_Used")]
	}]

	[h, if(bIsAttack == 1 && bIsLegal == 1), code:{
		<!-- il campo tipoAttacco è deprecato, ma non so se qualcuno lo usa quindi lo lascio -->
		[h: oEventParam = json.set("","tipo","ITEM","itemName",sItemName)]
		[macro("events/runEvents@this"): json.set("","source",source,"target",id,"event","On_Attack","eventParam",oEventParam)]
		[macro("events/runEvents@this"): json.set("","source",id,"target",source,"event","On_Attacked","eventParam",oEventParam)]
	}]

	[if (bIsLegal == 1) , code:{
		[macro("powers/isHittable@this"):json.append(source,id,sItemName)]
		[h: bHittable = macro.return]
		[msgOutput = msgOutput + popMessaggio(source,"hittableResult")]
	}]

	[h, if(bIsAttack == 1 && bHittable == 1), code:{
		<!-- il campo tipoAttacco è deprecato, ma non so se qualcuno lo usa quindi lo lascio -->
		[h: oEventParam = json.set("","tipo","ITEM","itemName",sItemName)]
		[macro("events/runEvents@this"):json.set("","event","On_Hit","source",source,"target",id,"eventParam",oEventParam)]
		[macro("events/runEvents@this"):json.set("","event","On_Hitted","source",id,"target",source,"eventParam",oEventParam)]
		[h: discoverResistenzaBersaglio(sItemName,source,id)]
	}]

	[if(bHittable == 1), code:{
		[macro(sItemMacro): json.set("","source",source,"target",id,"useParam",oUseParam)]
	}]

	[macro("powers/generaSpellMsg@this"):json.append(source,id)]
	[h:msgOutPut= msgOutput+ popMessaggio(source,"strPotere") +"<br>"]
	[macro("core/clearStatModifiers@this"): source]
	[macro("core/clearStatModifiers@this"): id]
}]

[h: appendMessaggio(source,"endOfActionMsg",msgOutput)]


[h: sTipo = upper(getLibProperty("tipo",sItemName))]
[h, if(sTipo=="OFFENSIVO"): consumaPotereOffensivo(source)]
[macro("consumables/consumeItem@this"): json.append(source,sItemName,oUseParam)]
<!-- L'oggetto viene consumato al termine per avere la libertà di eliminarlo se esaurito senza perderne le info-->

[h: macro.return = 0]