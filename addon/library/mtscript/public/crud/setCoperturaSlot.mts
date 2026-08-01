[h: fValue = arg(0)]
[h: oToken = arg(1)]
[h, if(argCount()>2): sNome = arg(2); sNome = "Generica"]
[h, if(argCount()>3): iDirezione = arg(3); iDirezione = 0] <!-- 1 Frontale; 0 Generale; -1 Spalle -->
[h, if(fValue > 1): fValue = 1.0]
[h, if(fValue < 0): fValue = 0.0]

[h: oCopertura = getProperty("Stack_Coperture",oToken)]
[h, if(json.type(oCopertura) != "OBJECT"): oCopertura = "{}"]
[h, if(fValue > 0), code:{
	[h: oSlot = json.set("","valore",fValue,"direzione",iDirezione)]
	[h: oCopertura = json.set(oCopertura,sNome,oSlot)]
};{
	[oCopertura = json.remove(oCopertura,sNome)]
}]

[h: setProperty("Stack_Coperture",oCopertura,oToken)]

[h: fCopertura = getCopertura(oToken)]
[h, if(fCopertura > 0): sCop = strformat("%s%%",round(fCopertura*100,1)); sCop = ""]
[h: setProperty("Copertura",sCop,oToken)]
