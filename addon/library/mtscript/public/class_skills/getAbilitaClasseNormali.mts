<!-- Restituisce tutte le abilità di classe da un token PG-->
[h: source = arg(0)]
[h, if(argCount()>1): aFilter = upper(arg(1)); aFilter = "[ATTIVA,PASSIVA,PECULIARE]"]

[h, macro("class_skills/getAbilitaClasseTutte@this"): source]
[h: lAb = macro.return]

[h, foreach(sAbil, macro.return), code:{
	[macro("class_skills/getTipoAbilita@this"): sAbil]
	[if(!json.contains(aFilter,macro.return)): lAb = json.remove(lAb,sAbil)]
}]

[h: macro.return = lAb]