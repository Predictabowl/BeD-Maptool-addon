[h: source = json.get(macro.args,"source")]
[h: spell = json.get(macro.args,"spell")]
[h: bOpp = json.get(macro.args,"isOpport")]
[h, if(!isNumber(bOpp)): bOpp = 0]

[h: tipo = upper(getLibProperty("tipo",spell))]
[h, if(tipo=="OFFENSIVO"), code:{
	[consumaPotereOffensivo(source,bOpp)]
};{
	[macro("combat/toggleArmaUsata@this"):source]
}]

[macro("updatePoteri@Lib:Scheda"): "Poteri"]
