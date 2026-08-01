[h: source = arg(0)]
[h: sLibAbilita = arg(1)]

[h: iEstenuante = getLibProperty("Estenuante", sLibAbilita)]
[h, if(!isNumber(iEstenuante)): return(0, "")]
[h, if(iEstenuante > 0), code:{
	[macro("class-skills/addEstenuante@this"): json.append(source, sLibAbilita, iEstenuante)]
}]