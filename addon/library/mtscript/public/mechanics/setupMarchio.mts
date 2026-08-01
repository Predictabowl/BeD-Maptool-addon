<!-- Studiato per essere chiamato più volte con incantesimi ad area -->
[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sMacroName = json.get(macro.args,"macroInfranto")]
[h: macroParam = json.get(macro.args,"macroParam")]
[h: sMacroRemove = json.get(macro.args,"macroRemove")]
[h: sTipo = upper(json.get(macro.args,"tipo"))] <!-- SFIDA o PROTEZIONE -->
[h: iDurata = json.get(macro.args,"durata")]
[h: sNome = json.get(macro.args,"nome")]

[h: sControl = "setupMarchio"]
<!-- sControl viene posto il Lista_Dati e dovrebbe essere eliminato quando il marchio ha finito il setup
in alcuni casi non viene eliminato, ad esempio con il marchio di classe dell'inquisitore lanciato con abilità di classe
perché?
l'evento eventFinishSetup dovrebbe pulire sempre tutto... quindi bisogna essere sicuri che sia un'azione
-->

[h: switchToken(source)]
[h: flag = getStrProp(Lista_Dati,sControl)]
[h, if(flag == 1), code:{
	[macro("mechanics/addMarchioTarget@this"): json.append(source,target,macroParam)]
};{
	[Lista_Dati = setStrProp(Lista_Dati,sControl,1)]
	[macro("mechanics/setMarchio@this"): macro.args]
	[macro("events/eventInstaller@this"): json.append(source,"on_Action_End",sControl,"eventFinishSetup@Lib:Meccaniche","")]
}]