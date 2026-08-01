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
[macro("core/popStatModifier@this"): json.append(source,sCap)]
[h: iMod = macro.return]

[h: iReturn = iRoll + iCap + iMod]
[h: listD = getProperty("Capacita",source)]
[if(bStoreRoll), code:{
	[h: ListD = setStrProp(ListD,sCap,iReturn)]
	[h: setProperty("Capacita",ListD,source)]
}]

[h: bSecFlag = 0]
[h, if(bVerbose != 0), code:{
	[if(bSecretRoll == 1), code:{
		[sMsgResult = strformat("<b>%s</b> (tiro segreto <i>%{sCap}</i>): 1d20 (%{iRoll}) %+d", getName(source),iCap,iCap)]
		[if(iMod != 0): sMsgResult = strformat("%{sMsgResult} <span title='Modificatore di Circostanza'>%+d</span>",iMod)]
		[sMsgResult = strformat("%{sMsgResult} &rarr; %{iReturn}")]
		[broadcast(sMsgResult,"GM")]
		[sPlayer = getPlayerName()]
		[if(!isGM(sPlayer)): broadcast(strformat("<b>%s</b> (tiro segreto <i>%{sCap}</i>)", getName(source),iCap),sPlayer)]
	};{
		[sMsgResult = strformat("<b>%s</b> (<i>%{sCap}</i>): 1d20 (%{iRoll}) %+d", getName(source),iCap,iCap)]
		[if(iMod != 0): sMsgResult = strformat("%{sMsgResult} <span title='Modificatore di Circostanza'>%+d</span>",iMod)]
		[sMsgResult = strformat("%{sMsgResult} &rarr; %{iReturn}")]
		[broadcast(sMsgResult,"gm-self")]		
	}]
}]


[h: macro.return = iReturn]