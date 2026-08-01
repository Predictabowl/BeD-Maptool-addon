[h: target = json.get(macro.args,"target")]
[h: parametri = json.get(macro.args,"parametri")]
[h: remove = json.get(macro.args,"remove")]
[h: oVal = (json.get(parametri,"valore"))]
[h: sNomeEffetto = (json.get(parametri,"nomeEffetto"))]

[macro("core/getEffectMolt@this"):json.append(target,sNomeEffetto)]
[h: iMolt = macro.return]

[h, if(!isNumber(oVal)), code:{
	[valore = 0]
	[for(i,0,iMolt), code:{
		[valore = valore + eval(oVal)]
	}]
	[h: msg = strformat("(%{oVal})x%{iMolt} = %+d",-valore)]
};{
	[valore = oVal*iMolt]
	[h: msg = strformat("%+d",-valore)]
}]

[h, if(remove ==1): valore = 0]


[h, if(valore > 0), code:{
	[h: verbose = getProperty("Verbose","MapVar")]
	[h: msg = strformat("(Ritardo modifica l'inziativa di %s , %{msg}) <br>",getName(target))]
	[macro("utility/ModificaIniziativa@this"): json.set("","target",target,"valore",valore)]
	[macro("utility/modFrazionePersonale@this"):json.append(target,valore)]
}]

[h: macro.return = msg]