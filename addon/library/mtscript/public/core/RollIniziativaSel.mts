[h: ids = getSelected()]
[macro("utility/getMapFrazione@this"):0]
[h: iStart = macro.return]
[h, foreach(id, ids, ""), CODE:
{
	[r, if(getPropertyType(id) == "Basic"), code:{
		[h: switchToken(id)]
		[h: iniz = getProperty("Tiro_Iniziativa")]
		[macro("utility/rollIniziativa@this"): iniz]
		[h: tiro = min(macro.return,iStart)]
		[h: addToInitiative(1,tiro)]
	};{}]
}]
[macro("utility/sortIniziativa@this"):0]