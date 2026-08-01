[h: iLP = json.get(macro.args,"LP")]
[h: target = json.get(macro.args,"target")]
[h: source = json.get(macro.args,"source")]
[h, if(json.contains(macro.args,"prob") == 1): iProb = json.get(macro.args,"prob"); iProb = 30]


[h: iDado = roll(1,100)]
[h: iDanno = 0]

[h: msg = strformat("<br>Sovraccarico (%{iProb}%) 1d100 = %{iDado}")]

[h, if(iDado + iProb > 100), code:{
	[h: iPow = floor(iLP/2)]
	[h: param = json.set("","LP",iPow,"dmgLP","1d12","target",target,"source",source)]
	[macro("powers/getSpellDamage@this"): param]
	[h: iDanno = macro.return]
	[macro("core/DannoTarget@this"): json.set("","target",target,"valore",iDanno,"source",source,"verbose",0)]
	[macro("utility/popMessaggio@this"): json.set("","token",target,"key","strDanno")]
	[msg = strformat("%{msg}: %{macro.return}")]
};{
	[msg = strformat("%{msg}: Fallimento")]
}]

[macro("utility/appendMessaggio@this"): json.set("","token",source,"key","strPotere","msg",msg)]
[h: macro.return = msg]

