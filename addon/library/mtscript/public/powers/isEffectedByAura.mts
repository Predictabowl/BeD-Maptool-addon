[h: target = json.get(macro.args,0)]
[h: oAura = json.get(macro.args,1)]

[h: sFOF = json.get(oAura,"FOF")]
[h: bReturn = 1]

[h: iAOE = json.get(oAura,"AOE")]
[h: oOrigine = json.get(oAura,"origine")]
[h: iOrigineX = json.get(oOrigine,0)]
[h: iOrigineY = json.get(oOrigine,1)]
[h: iDist = getDistanceToXY(iOrigineX,iOrigineY,0,target)]
[h, if(iDist > iAOE), code:{
	[macro("powers/isAuraTransitated@this"): json.append(target, oAura)]
	[if(!macro.return): return(0,0)]
}]

[h, switch(sFOF), code:
case "PC":{
	[if(isPC(target)): bReturn=1; bReturn=0]
};
case "NPC":{
	[if(isNPC(target)): bReturn=1; bReturn=0]
};
case "NO":{
	[bReturn = 0]
};
default:{
}]

[h: macro.return = bReturn]
