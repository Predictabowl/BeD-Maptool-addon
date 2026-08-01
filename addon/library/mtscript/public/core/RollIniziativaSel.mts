[h: ids = getSelected()]
[macro("getMapFrazione@Lib:MetodiVari"):0]
[h: iStart = macro.return]
[h, foreach(id, ids, ""), CODE:
{
	[r, if(getPropertyType(id) == "Basic"), code:{
		[h: switchToken(id)]
		[h: iniz = getProperty("Tiro_Iniziativa")]
		[macro("rollIniziativa@Lib:MetodiVari"): iniz]
		[h: tiro = min(macro.return,iStart)]
		[h: addToInitiative(1,tiro)]
	};{}]
}]
[macro("sortIniziativa@Lib:MetodiVari"):0]