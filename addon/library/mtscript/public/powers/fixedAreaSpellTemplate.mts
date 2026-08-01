[h: sCaster = json.get(macro.args,"source")]
[h: spellName = json.get(macro.args, "spell")]
[h: bInizioRound = json.get(macro.args,"inizioRound")]
[h, if(!isNumber(bInizioRound)): bInizioRound = 1]
[h: nCopertura = json.get(macro.args,"copertura")]
[h: bMBL = json.get(macro.args,"hasMBL")] <!-- Default 0 -->
[h: bVBL = json.get(macro.args,"hasVBL")] <!-- Default 0 -->
[h: iTriggerRange = json.get(macro.args, "triggerRange")] <!-- default is move over, 0 = no trigger, > 0 is near the draw within that range-->

[h: sEventName = spellName+"-"+getName(sCaster)]
[h: sEffectName = getLibProperty("nome_decorativo", spellName)]
[h: sMap = getCurrentMapName()]
<!-- Evento che viene applicato a chi si muove nell'area -->
[h: eventoMacro = json.get(macro.args, "eventoMacro")]
[h: evMacroParam = json.get(macro.args, "eventoMacroParam")]

[macro("utility/getUltimoDraw@this"): json.set("", "layer", "TOKEN")]
[h: sDrawId = macro.return]
[h: setDrawingName(sMap, sDrawId, sEffectName)]
[h, macro("powers/isControlledSpell@this"): sCaster]
[h: bDLTest = macro.return]
[h: evMacroParam = json.set(evMacroParam, "source", sCaster, "spellName", spellName, "effectName", sEffectName, "drawId", sDrawId, "DLTest", bDLTest)]

<!-- Check Draw Range: Missing -->
<!-- setup Copertura -->
[h: sCoperturaName = ""]
[h, if(isNumber(nCopertura)), code :{
	[sCoperturaName = sCaster+"-"+spellName]
	[macro("addCoperturaMappa@Lib:Meccaniche"): json.append(sCoperturaName, sDrawId, nCopertura)]
	[sDecoratedMacro = eventoMacro]
	[eventoMacro = "decoratorFixedAreaCopertura@Lib:Poteri"]
	[evMacroParam = json.set(evMacroParam, "coperturaName", sCoperturaName, "decoratedCoperturaMacro", sDecoratedMacro)]
}]

<!-- Setup VBL -->
[h, if(bMBL == 1 || bVBL == 1), code:{
	[macro("utility/drawingToShape@this"): sDrawId]
	[jShape = macro.return]
	[if(bMBL == 1): drawMBL(jShape)]
	[if(bVBL == 1): drawVBL(jShape)]
}]

<!-- Effetto per rimuovere l'evento ed il Draw -->
[h: jEffettoParam = json.set("", "drawId", sDrawId, "eventName", sEventName, "inizioRound", bInizioRound, "coperturaName", sCoperturaName, "hasMBL", bMBL, "hasVBL", bVBL)]
[h: temp = json.set("","tipo","macroCall","macroName", "removeFixedAreaEffect@Lib:Poteri", "parametri", jEffettoParam)]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set("", "params", altro, "effetto", sEffectName)]
[macro("powers/effectSpellTemplate@this"): json.set("","source",sCaster,"target", sCaster,"spellName",spellName,"effetto",oEffetto, "bloccaTS", 1)]
[h: jEffectData = macro.return]
[h: evMacroParam = json.merge(evMacroParam, jEffectData)]

<!-- setup evento -->
[h, if(iTriggerRange != 0), code:{
	[h,if(iTriggerRange == ""), code:{
		[sMoveMap = "moveInsideDraw@Lib:Eventi"]
		[sStartRoundMap = "startInsideDraw@Lib:Eventi"]
	};{
		[sMoveMap = "moveNearDraw@Lib:Eventi"]
		[sStartRoundMap = "startNearDraw@Lib:Eventi"]
	}]
	[h: sMapVar = findToken("MapVar")]
	[h: jEventParam = json.set("","drawId", sDrawId, "macroEffectName", eventoMacro, "macroEffectParam", evMacroParam, "triggerRange", iTriggerRange)]
	[h: eventInstaller(sMapVar, "On_Move_Map", sEventName, sMoveMap , jEventParam)]
	[h, if(bInizioRound): sEvent ="On_Round_Start_Map"; sEvent = "On_Round_End_Map"]
	[h: eventInstaller(sMapVar, sEvent, sEventName, sStartRoundMap, jEventParam)]
}]


[h: macro.return = json.set(jEffectData, "drawId", sDrawId)]