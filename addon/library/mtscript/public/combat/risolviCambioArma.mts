[h: source = json.get(macro.args,"source")]
[h: iCosto = json.get(macro.args,"costoPA")]
[h: jCallbackParams = json.get(macro.args, "callbackParams")]

[h, if(!isCombat()): iCostoPA = 0]

[h: switchToken(source)]
[h, if(!isNumber(iCosto)): iCosto = 3]

[h: oCost = json.set("","token",source,"MM",iCosto)]
[macro("core/payAction@this"): oCost]

[r, if(macro.return ==1), code:{
	[macro("eseguiEquipaggiamento@Lib:Scheda"): jCallbackParams]
	[h: bInterrupt = 0]
};{
	[h: bInterrupt = 1]
}]


[macro("core/clearStatModifiers@this"): source]
[h: macro.return = bInterrupt]