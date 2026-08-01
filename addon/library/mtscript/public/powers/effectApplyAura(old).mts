<!--  Parametri necessari:
nomeMacro - macro che genera l'effetto, se è un normale effetto si usa generalEffectAura. Se non specificato viene usato automaticamente.
macroParam - parametri della macro sopra, la macro deve accettare il parametro "target", che poi verrà sovrascritto quando l'aura cerca bersagli
source - origine dell'aura
caster - colui che genera l'aura, se omesso si usa source
nomeAura - nome dell'effetto aura, unico. Accoppiato al nome del possessore per ottenere l' id del generatore aura
spellName - libreria del potere che genera l'aura
durata -
AOE - area del'effetto
tipoMov - come si sposta l'aura: FOLLOW si muove con source, STATIC non si può muovere, MOVABLE può essere riposizionata

OPZIONALI
tipo - determina il tipo del generatore d'aura, per stabilire come rimuoverlo e come interagire cone esso. Non è il tipo del'effetto proiettato.
FOF - stabilisce chi colpisce, DANNOSO = nemici se riesce  il tiro, UTILE = alleati se riesce il tiro, ALLEATI, NEMICI, TUTTI
potenza - normalmente il livello di lancio dell'aura, al momento inutilizzato
mutex - keyword per escludere l'effetto di altre aure, ma funziona solo grazie ad ApplyEffect richiamato da generalEffectAura
portata - distanza massima del centro dell'aura, se omesso è 0, serve solo nel caso di AURE di tipo "MOVABLE"
AUTOMATICAMENTE GENERATI
subito = 1 - sempre 1 per l'effetto generatore
tipo = "aura" - parametro del'effetto generatore
verbose = 0 - il generatore d'aura è nascosto
messaggi = 0 - il generatore d'aura è nascosto
updateMacro - Macro da chiamare alla fine di ogni round
updateParam - parametri per updateMacro
firstRoundUpdate - se posto a 0 non chiama la updateMacro nel primo round. Se omesso è posto a 1
otherAuraParams - Serve se si vogliono aggiugnere altri effetti alla base dell'aura, ad esempio una macro per fare ulteriore cleanup
visualizza - visuallizza l'aura attorno al personaggio, 0: non visualizzata, 1: Rossa, 2: Blu
-->

[h: source = json.get(macro.args,"source")]
[h: caster = json.get(macro.args,"caster")]
[h: sNomeMacro = json.get(macro.args,"nomeMacro")]
[h: oMacroParam = json.get(macro.args,"macroParam")]
[h: idAura = json.get(macro.args,"nomeAura")]
[h: sMutex = json.get(macro.args,"mutex")]
[h: iAOE = json.get(macro.args,"AOE")]
[h: iDurata = json.get(macro.args,"durata")]
[h: iRange = json.get(macro.args,"portata")]
[h: sTipo = json.get(macro.args,"tipo")]
[h: sTipoMov = json.get(macro.args,"tipoMov")]
[h: iPotenza =  json.get(macro.args,"potenza")]
[h: sFOF =  json.get(macro.args,"FOF")]
[h: updateMacro = json.get(macro.args,"updateMacro")]
[h: updateParam = json.get(macro.args,"updateParam")]
[h: firstRoundUpdate = json.get(macro.args,"firstRoundUpdate")] 
[h: otherAuraParams = json.get(macro.args,"otherAuraParams")]
[h: iVisualAura = json.get(macro.args,"visualizza")]

[h, if(sNomeMacro == ""): sNomeMacro = "generalEffectAura@Lib:Poteri"]
[h, if(caster == ""): caster = source]
[h, if(iRange == ""): iRange = 0]
[h, if(firstRoundUpdate == ""): firstRoundUpdate = 1]
[h, if(!isNumber(iVisualAura)): iVisualAura = 0]


<!-- setup Aura con l'Effetto che l'aura poietta -->
[h: param = json.set("","source",source,"caster",caster,"idAura",idAura,"tipoMov",sTipoMov,"nomeMacro",sNomeMacro,"macroParam",oMacroParam,
	"AOE",iAOE,"portata",iRange,"FOF",sFOF,"visualizza",iVisualAura)]
[macro("powers/setupAura@this"):param]

<!-- Effetto per rimuovere e aggiornare l'aura -->
[h: effectAuraRemove= json.set("","target",source,"effetto",idAura,"durata",iDurata,"subito",1,"potenza",iPotenza,"tipo",sTipo,"verbose",0,"messaggi",0,"mutex",sMutex)]
[h: effectARParam = json.set("","source",source,"idAura",idAura,"tipo","aura")]
[h, if(updateMacro != ""), code:{
	[h: effectARParam = json.set(effectARParam,"updateMacro",updateMacro,"updateParam",updateParam,"firstRoundUpdate",firstRoundUpdate)]	
}]
[h: effectARParamList = json.append("",effectARParam)]

[h, if(otherAuraParams != ""), code:{
	[h: effectARParamList = json.append(effectARParam,otherAuraParams)]
}]

[h: effectAuraRemove = json.set(effectAuraRemove,"params",effectARParamList)]
[macro("core/ApplyEffect@this"):effectAuraRemove]

[h, switch(iVisualAura), code:
	case "1":{
		[visualizzaAura(source,iAOE,1)]
	};
	case "2":{
		[visualizzaAura(source,iAOE,1,"Blu")]
	};
	default: {}
]

