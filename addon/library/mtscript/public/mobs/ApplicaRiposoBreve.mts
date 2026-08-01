[h: target = arg(0)]

[h, foreach(id,target), code:{
	[switchToken(id)]
	[macro("mobs/getNumRiposoBreve@this"): id]
	[iRipBreve = macro.return]
	[if(iRipBreve > 0), code:{
		[macro("mobs/riposoBasicRecovery@this"): id]
		[macro("mobs/getManaRiposoBreve@this"): id]
		[recuperaMana(id,macro.return)]
		[macro("mobs/getPFRiposoBreve@this"): id]
		[macro("core/changeCurrentFatica@this"): json.append(id,macro.return,"msgFaticaRegen")]
		[macro("mobs/setNumRiposoBreve@this"): json.append(id, iRipBreve -1)]
		[sMsg = strformat("%s<br>%s<br>", popMessaggio(id,"msgManaRegen"), popMessaggio(id,"msgFaticaRegen"))]
	};{
		[sMsg = strformat("<span style='color:orange;'> Attenzione </span> %s non pià Riposi Brevi a disposizione", getName(id))]
	}]
	[broadcast(sMsg)]
}]