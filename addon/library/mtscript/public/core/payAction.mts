[h: macro.args = arg(0)]
[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: target = json.get(macro.args,"token")]
	[h: iPA = json.get(macro.args,"PA")]
	[if(!isNumber(iPA)): iPA = 0]
	[h: iMM = json.get(macro.args,"MM")]
	[if(!isNumber(iMM)): iMM = 0]
	[h: iMana = json.get(macro.args,"mana")]
	[if(!isNumber(iMana)): iMana = 0]
	[h: iPF = json.get(macro.args,"PF")]
	[if(!isNumber(iPF)): iPF = 0]
	[h: iPP = json.get(macro.args,"PP")]
	[if(!isNumber(iPP)): iPP = 0]
};{
	[broadcast("Deprecated Use of array argument in core/payAction@this. Use Objects instead")]
	[target = arg(0)]
	[h, if(argCount()>2), code:{
		[iPA= arg(1)]
		[iPF = arg(2)]
		[iMana = arg(3)]
		[iMM = arg(4)]
		[iPP = arg(5)]
	};{
		[aCosts = arg(1)]
		[iPA = json.get(aCosts,1)]
		[iPF = json.get(aCosts,2)]
		[iMana = json.get(aCosts,3)]
		[iMM = json.get(aCosts,4)]
		[iPP = json.get(aCosts,5)]		
	}]
}]
	


[h: aResult = canPayAction(json.set("","token",target,"PA",iPA,"PF",iPF,"mana",iMana,"MM",iMM,"PP",iPP))]
[h: sMsg = popMessaggio(target,"checkPayAction")]
[h: bFlag = json.get(aResult,0)]
[h, if(!bFlag), code:{
	[broadcast(sMsg,getPlayerName())]
	[return(0,0)]
}]

[h: switchToken(target)]

[h: jCosts = json.get(aResult,1)]
[h: PF = PF - json.get(jCosts,"PF")]
[h: Mana = Mana - json.get(jCosts,"mana")]
[if(isCombat()), code:{
	[h: PA = PA - json.get(jCosts,"PA")]
	[h: MM = MM - json.get(jCosts,"MM")]
	[h: PP = PP - json.get(jCosts,"PP")]
}]
[macro("utility/updateBars@this"):target]
[h: macro.return = 1]
