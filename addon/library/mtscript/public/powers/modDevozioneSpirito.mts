[h: oToken = arg(0)]
[h: sNome = arg(1)]
[h, if(argCount() > 2): iRank = arg(2); iRank = -1]

[h: oSpirito = getSpirito(oToken,sNome)]
[h, if(json.isEmpty(oSpirito)): return(0, 0)]
[h: iMood = json.get(oSpirito,"devozione")]

[macro("powers/getMaxDevozione@this"): oToken]
[h: iMaxDev = macro.return]
[h, if(iRank > 0 && iMood >= iMaxDev), code:{
	[sMsg = strformat("La devozione di %{sNome} è già al massimo.")]
	[broadcast(sMsg, getPlayerName())]
	[return(0, 0)]
}]

[h, if(iRank < 0 && iMood <= -iRank), code:{
	[bCont = input("sNoUse|ATTENZIONE: Questa azione porterà alla perdita permanente dello spirito.||LABEL|Span=TRUE")]
	[if(!bCont): return(0, 0)]
}]


[h, if(!isNumber(iMood)): iMood = 10]
[h: iMood = iMood+iRank]
[h: oSpirito = json.set(oSpirito,"devozione",iMood)]
[h: setSpirito(oToken,sNome,oSpirito)]

[h: macro.return = 1]
