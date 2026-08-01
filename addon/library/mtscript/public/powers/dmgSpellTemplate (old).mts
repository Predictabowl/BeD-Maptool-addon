[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spell")]
[h: sDanno = json.get(macro.args,"danno")]
[h: sEffetto = json.get(macro.args,"effetto")]

[h: switchToken(source)]
[h: elemento = getLibProperty("elemento",spellName)]

[macro("getUltimoCritico@Lib:Combattimento"):source]
[h: critRes = macro.return]

[h: args = json.set("","source",source,"target",target,"spellName",spellName,"critRes",critRes)]
[macro("powers/getAutoLL@this"):args]
[h: iLL = macro.return]


[h: param = json.set("","target",target,"LL",iLL,"element",elemento)]
[macro("powers/getLP@this"):param]
[h: iLP = macro.return]

[h: param = json.set("","LP",iLP,"dmgLP",sDanno,"elemento",elemento,"target",target,"source",source)]
[macro("powers/getSpellDamage@this"): param]
[h: danno = macro.return]

[h: msgOut= strformat("<br>Danno: %{iLP}")+substring(sDanno,1)]
[macro("utility/appendMessaggio@this"): json.set("","token",source,"key","strPotere","msg",msgOut)]

[h: param = json.set("","target",target,"source",source,"valore",danno,"verbose",0)]
[macro("core/DannoTarget@this"): param]
[h: TSResult = -1]

[h, if(sEffetto != ""), code:{
	[h: param = json.set("","target",target,"source",source,"spellToken",spellName,"critRes",critRes)]
	[macro("powers/getSpellTSResult@this"):param]	
	[TSResult = macro.return]

	[macro("powers/getDurata@this"): json.set("","source",source,"spellName",spellName)]
	[iDurata = macro.return]
	
	[h: param = json.set("","target",target,"LP",iLP,"TSRes",TSResult,"durata",iDurata,"nomeEffetto",sEffetto,"stato",sEffetto,"spellName",getLibProperty("nome_decorativo",spellName))]

	[macro("powers/ifTSEffect@this"):param]
}]

[macro("powers/generaSpellMsg@this"):json.append("",source,target)]
[h: macro.return = json.set("","LL",iLL,"LP",iLP,"danno",danno,"TSResult",TSResult)]

