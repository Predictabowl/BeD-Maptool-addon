[h: oToken = arg(0)]
[h, if(oToken == ""): oToken = currentToken()]
[h: sCar1 = arg(1)]
[h: sCar2 = arg(2)]
[h, if(argCount() > 3), code: {
	[sCar3 = arg(3)]
	[sCar4 = arg(4)]
};{
	[sCar3 = sCar1]
	[sCar4 = sCar2]
}]


[h: aCars = json.append(sCar1, sCar2, sCar3, sCar4)]
[h: aCarVals = "[]"]
[h, foreach(sCar, aCars), code:{
	[iCar = getProperty(sCar,oToken) - json.count(aCars, sCar)]
	[aCarVals = json.append(aCarVals, iCar)]
}]
[iResult = math.arrayMin(aCarVals) + 4]

[h: iLivello = getProperty("Livello",oToken)]
[h, if(iLivello > 6), code:{
	[iMax = 10]
};{
	[if(iLivello < 4): iMax = 8; iMax = 9]
}]

[h: iResult = max(min(iResult,iMax),1)]
[h: return(0, iResult)]
