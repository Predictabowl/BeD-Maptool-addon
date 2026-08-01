[h: oToken = arg(0)]
[h: sSpirito = arg(1)]

[macro("powers/getModRichiamoSpirito@this"): json.append(oToken,sSpirito)]
[h, if(macro.return <= 1), code:{
	[result = json.append(0,strformat("Non è possibile ridurre ulteriormente la devozione di %{sSpirito}"))]
	[return(0,result)]
}]

[h, macro("powers/modDevozioneSpirito@this"): json.append(oToken,sSpirito,-1)]
[h, if(!macro.return): return(0, json.append(0,strformat("Errore: Spirito %{sSpirito} non trovato")))]

[h: sMsg = strformat("-1 Devozione %{sSpirito}")]
[macro("powers/rollRichiamoSpirito@this"):json.append(oToken,sSpirito)]
[h: jRollResult = macro.return]
[h: bResult = json.get(jRollResult,0)]
[h, if(!bResult), code:{
	[iScarto = json.get(jRollResult,3) - json.get(jRollResult,2)]
	[switchToken(oToken)]
	[iDanno = roundRoll(PV_Max * iScarto /10)]
	[dannoTarget(oToken, iDanno, oToken)]
	[sMsg = strformat("%{sMsg} | %s", json.get(jRollResult,1))]
}]
[h: macro.return = json.append(1,sMsg)]	
