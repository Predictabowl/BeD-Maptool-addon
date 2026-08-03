[h: oOggetto = arg(0)]
[h, if(argCount() > 1), code:{
	[source = arg(1)]
	<!-- Here should put eventual bonuses based on the user. Maybe also check the item type to see if is eligible for the bonus -->
	[iBonusSource = getLivelloAbilita(source,"AffinitaMagica")]
};{
	[iBonusSource = 0]
}]

[h: iLiv = json.get(oOggetto,"livello")]
[h: macro.return = iLiv + iBonusSource]
