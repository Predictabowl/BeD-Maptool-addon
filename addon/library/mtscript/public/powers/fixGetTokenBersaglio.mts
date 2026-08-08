[h: source = json.get(macro.args,"source")]
[h: spellName = json.get(macro.args,"spellName")]
[h: sOrigine = json.get(macro.args,"origine")]
[h, if(sOrigine == ""): sOrigine = source]

[h: sShape = upper(getAoEShape(spellName,source))]
[h, if(sShape == "LINEA"): iPortata = getSpellAoE(source,spellName); iPortata = getSpellRange(source,spellName)]

[macro("powers/spawnTokenBersaglio@this"): source]
[h: tokenBersaglio = macro.return]
[h: sTipoAOE = fetchSpellProp(spellName,"tipo_AOE")]
[h: lTags = fetchSpellProp(spellName,"tags")]

[h, if(listContains(sTipoAOE,"SERVITOREORIGIN") || listContains(lTags,"SERVITOREORIGIN")), code:{
	[oServitore = findToken(getServitore(source))]
	[assert(oServitore != "","ERRORE: Servitore non presente",0)]
	[iX = getTokenX(0,oServitore)]
	[iY = getTokenY(0,oServitore)]
	[moveToken(iX,iY,0,tokenBersaglio)]
}]

[h, if(iPortata == 0), code:{
	[iX = getTokenX(0,sOrigine)]
	[iY = getTokenY(0,sOrigine)]
	[moveToken(iX,iY,0,tokenBersaglio)]
}]


[h: iDist = getDistance (tokenBersaglio,0,sOrigine)]
[h: assert(iDist <= iPortata,"Bersaglio Fuori Portata")]


[h, if(sShape == "CONO" || sShape == "FRONTALE"), code:{
	[sFacing = getTokenFacing(sOrigine)]
	[setTokenFacing(sFacing,tokenBersaglio)]
}]

[h: macro.return = tokenBersaglio]