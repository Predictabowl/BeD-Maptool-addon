[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sDanno = json.get(macro.args,"danno")]
[h: sLibName = json.get(macro.args,"libName")]
[h: oUseParam = json.get(macro.args,"useParam")]
[h: sStato = json.get(macro.args,"stato")]
[h: bSubito = json.get(macro.args,"inizioRound")] <!-- Opzionale -->

[macro("consumables/getItemAuto@this"): json.append(source,sLibName,oUseParam)]
[h: jDotArg = json.set("","source",source,"target",target,"stato",sStato,"spell",sLibName,"danno",sDanno,
	"inizioRound",bSubito,"LL",getLLOggetto(macro.return))]
[macro("powers/dotSpellTemplate@this"): jDotArg]
