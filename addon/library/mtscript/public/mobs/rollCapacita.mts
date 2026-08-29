[h, if(json.type(macro.args) == "OBJECT"), code:{
	[source = json.get(macro.args,"source")]
	[sCap = json.get(macro.args,"capacita")]
	[bVerbose = json.get(macro.args,"verbose")]
	[bStoreRoll = json.get(macro.args,"storeRoll")]
	[bSecretRoll = json.get(macro.args,"segreto")]
	[if(bStoreRoll == ""): bStoreRoll = 1]
};{
	[source = json.get(macro.args,0)]
	[sCap = json.get(macro.args,1)]
	[if(json.length(macro.args)>2): bSecretRoll = json.get(macro.args,2); bSecretRoll = 0]
	[bVerbose = 1]
	[bStoreRoll = 1]
}]

[h: switchToken(source)]
[h: iCap = getProperty(sCap,source)]

[h: iRoll = roll(1,20)]
[h, macro("core/popStatModifier@this"): json.append(source,sCap)]
[h: iMod = macro.return]

[h: iReturn = iRoll + iCap + iMod]
[h: jReturn = json.set("", "total", iReturn, "roll", iRoll, "skill", iCap, "mods", iMod, "secret", bSecretRoll)]
[h, if(bStoreRoll): Capacita = json.set(Capacita, sCap, jReturn)]

[h: bSecFlag = 0]
[h, if(bVerbose != 0), code:{
	[h: sMods = strformat("<span title='Grado Capacità'>%+d</span>", iCap)]
	[if(iMod != 0): sMods = strformat("%{sMods}<span title='Modificatore di Circostanza'>%+d</span>",iMod)]
	[if(bSecretRoll == 1), code:{
		[sMsgResult = strformat("<b>%s</b> (tiro segreto <i>%{sCap}</i>): 1d20%{sMods} &rarr; ", getName(source))]
		[sMsgResult = strformat("%{sMsgResult} %{iRoll}%{sMods} = %{iReturn}")]
		[broadcast(sMsgResult,"gm")]
		[sPlayer = getPlayerName()]
		[if(!isGM(sPlayer)): broadcast(strformat("<b>%s</b> (tiro segreto <i>%{sCap}</i>)", getName(source),iCap),sPlayer)]
	};{
		[sMsgResult = strformat("<b>%s</b> (<i>%{sCap}</i>): 1d20%{sMods} &rarr; ", getName(source))]
		[sMsgResult = strformat("%{sMsgResult} %{iRoll}%{sMods} = %{iReturn}")]
		[broadcast(sMsgResult,"gm-self")]		
	}]
}]

[h: macro.return = jReturn]
[r: macro.return]