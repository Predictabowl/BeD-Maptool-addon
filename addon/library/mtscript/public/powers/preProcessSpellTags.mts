[h: source = arg(0)]
[h: spellName = arg(1)]
	
[h: sTags = getLibProperty("tags",spellName)]
[h, if(listContains(sTags,"LANCIO")), code:{
	[addSpellStartData(source,"lancio",1)]
};{
	[bLancioOverride = getOverride(source,"potereArmaLancio")]
	[if(!listContains(sTags,"MISCHIA") && bLancioOverride): addSpellStartData(source,"lancio",1)]
}]
[h, if(listContains(sTags,"RISOLUTO")): addSpellStartData(source,"risoluto",1)]
[h, if(listContains(sTags,"CONTROLLATO")): addSpellStartData(source,"controllato",1)]

