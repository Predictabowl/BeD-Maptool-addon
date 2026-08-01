[h: oToken = arg(0)]
[h: spellName = arg(1)]
[h: iModStack = arg(2)]
[if(argCount()>3): oSource = arg(3); oSource = ""]


[h, if(isNumber(spellName)), code:{
	[if(oSource == ""): sTipo = "Rosso"; sTipo = oSource]
	[iRaggio = spellName]
};{
	[if(oSource == ""): oSource = oToken]
	[iRaggio = getSpellAoE(oSource,spellName)]
	[if(isAoEHarmfulSpell(spellName)): sTipo = "Rosso"; sTipo = "Blu"]
}]

[h: sNomeCerchio = strformat("%{sTipo} %{iRaggio}")]
[h: sTipoCerchio = "Aree di Effetto"]
[h: sMemory = "STACKCERCHI"]

[h: oStack = getDaMemoria(oToken,sMemory)]
[h, if(json.type(oStack) != "OBJECT"): oStack = "{}"]
[h: iStack = json.get(oStack,sNomeCerchio)]
[h, if(!isNumber(iStack)): iStack = 0]
[h: iStack = iStack + iModStack]
[h, if(iStack < 0): iStack = 0]

[h: switchToken(oToken)]

[h: setLight(sTipoCerchio,sNomeCerchio,iStack)]

[h: oStack = json.set(oStack,sNomeCerchio,iStack)]
[h: setInMemoria(oToken,sMemory,oStack)]