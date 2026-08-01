[h: oToken = arg(0)]
[h: aMutex = arg(1)]
[h: iDurata = arg(2)]
[h: iMoltiplicatore = arg(3)]
[h, if(argCount() > 4): jParams = arg(4); jParams = "{}"]


[h, if(json.isEmpty(aMutex)): return(0, "[]")]
[h: originalList = getProperty("Lista_Effetti", oToken)]
[h, foreach(effect,originalList), code:{
	[h: subList = json.get(originalList,effect)]
	[h: aMutex2 = json.get(subList,"mutex")]
	[aIntersect = json.intersection(aMutex, aMutex2)]
	[if(!json.isEmpty(aIntersect)), code: {
		[macro("core/getEffectMolt@this"): json.append(oToken, effect)]
		[iMoltOld = macro.return]
		[macro("core/getEffectDurata@this"): json.append(oToken, effect)]
		[iDurataOld = macro.return]
		[if((iMoltOld > iMoltiplicatore) || (iMoltOld == iMoltiplicatore && iDurataOld > iDurata)): 
			bRemove = input(strformat("notUsed|Vuoi rimuovere questo effetto?|%{effect}|LABEL")); bRemove = 1]
		[h, if(bRemove == 0): return(0, 0)]
		[macro("core/RemoveEffect@this"): json.append(oToken, effect)]
	}]
}]

[h: macro.return = 1]
