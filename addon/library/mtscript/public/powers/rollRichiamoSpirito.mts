[h: oToken = json.get(macro.args,0)]
[h: sSpirito = json.get(macro.args,1)] 

[macro("powers/getModRichiamoSpirito@this"): json.append(oToken,sSpirito)]
[h: iModDev = macro.return]
[h: iRoll = 1d6]
[h: iCD = 7]
[h: iStatMod = popStatModifier(oToken,"modRichiamo")]
[h: iTot = iRoll + iModDev]
[h: sMsg = strformat("Tiro richiamo spirito: <span title='%{iRoll}'>1d6</span> <span title='Mod. Devozione'>%+d </span>", iModDev)]
[h, if(iStatMod != 0 ): sMsg = strformat("%{sMsg} <span title='Altri Mod.'>%+d</span>", iStatMod)]
[h: sMsg = strformat("%{sMsg} = %{iTot} (CD: %{iCD})")]

[h, if(iTot>=iCD), code:{
	[sMsg = strformat("%{sMsg} <span style='color:green'>Successo</span>")]
	[bResult = 1]
};{
	[sMsg = strformat("%{sMsg} <span style=color:red'>Fallimento</span>")]
	[bResult = 0]
}]

[h: macro.return = json.append(bResult,sMsg,iTot,iCD)]