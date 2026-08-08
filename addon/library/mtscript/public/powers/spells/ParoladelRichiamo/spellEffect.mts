[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[h: switchToken(source)]
[h: spellName = "ParoladelRichiamo"]

[macro("utility/isHostile@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(source,target)]
[bHostile = macro.return]
[macro("powers/isHelpful@lib:it.aldinucci.piero.bed.maptool.ruleset"): spellName]	
[bHelpful = macro.return]

[if(bHostile == bHelpful), code:{
	[h: msgOut= strformat("<br>L'incantesimo non ha effetto sul bersaglio scelto")]
	[macro("utility/appendMessaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",source,"key","strPotere","msg",msgOut)]
};{
	[macro("powers/getBersaglio@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","source",source,"portata",1)]
	[h: oBersaglio = macro.return]
	[h: iX = getTokenX(0,oBersaglio)]
	[h: iY = getTokenY(0,oBersaglio)]
	[h: moveToken(iX,iY,0,target)]

}]


[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]
