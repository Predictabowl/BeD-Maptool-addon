[h: oToken = arg(0)]
[h, if(findToken(oToken) == ""): oToken = currentToken()]
[h: sCar1 = arg(1)]
[h: sCar2 = arg(2)]
[h, if(argCount() > 3): sCar3 = arg(3); sCar3 = ""]


[h: iLivello = getProperty("Livello",oToken)]
[h: iCar1 = getProperty(sCar1,oToken)]
[h: iCar2 = getProperty(sCar2,oToken)]
[h, if(sCar3 != ""), code:{
	[iCar3 = getProperty(sCar3,oToken)]
	[iResult = min(iCar1, iCar2, iCar3) + 3]

};{
	[iResult = min(iCar1, iCar2) + 2]

}]

[h, if(iLivello > 6), code:{
	[iMax = 10]
};{
	[if(iLivello < 4): iMax = 8; iMax = 9]
}]

[h: iResult = max(min(iResult,iMax),1)]

[h: macro.return = iResult]
