[h, if(argCount() == 1): macro.args = arg(0)]
[h, if(json.type(macro.args) == "OBJECT"), code:{
	[macro.args = arg(0)]
	[h: target = json.get(macro.args,"token")]
	[h: azione = json.get(macro.args,"PA")]
	[if(!isNumber(azione)): azione = 0]
	[h: move = json.get(macro.args,"MM")]
	[if(!isNumber(move)): move = 0]
	[h: manaCons = json.get(macro.args,"mana")]
	[if(!isNumber(manaCons)): manaCons = 0]
	[h: fatica = json.get(macro.args,"PF")]
	[if(!isNumber(fatica)): fatica = 0]
	[h: iPP = json.get(macro.args,"PP")]
	[if(!isNumber(iPP)): iPP = 0]
};{
	[broadcast("Deprecated use of array argument in core/canPayAction@this. Use Objects instead")]
	[h: target = json.get(macro.args,0)]
	[h: azione = json.get(macro.args,1)]
	[h: fatica = json.get(macro.args,2)]
	[h: manaCons = json.get(macro.args,3)]
	[h: move = json.get(macro.args,4)]
	[h: iPP = 0]
}]

[h: switchToken(target)]
[h: flag = 1]

[macro("movement/checkMovement@this"):json.append(target,move)]
[h: move = json.get(macro.return,0)]
[h: azione = azione + json.get(macro.return,1)]

[macro("powers/calcPPAzione@this"):json.append(target,iPP)]
[h: iPP = json.get(macro.return,0)]
[h: azione = azione + json.get(macro.return,1)]

[h: sMsgTag = "checkPayAction"]

[h, if(move > MM  && move > 0), code:{
	[msg = strformat("%s <span style='color:red;font-weight:bold;'>Non ha abbastanza MM per questa Azione.</span>", getName(target))]
	[appendMessaggio(target,sMsgTag,msg)]		
	[h: flag = 0]
}]

[h, if(iPP > PP  && iPP > 0), code:{
	[msg = strformat("%s <span style='color:red;font-weight:bold;'>Non ha abbastanza PP per questa Azione.</span>", getName(target))]
	[appendMessaggio(target,sMsgTag,msg)]		
	[h: flag = 0]
}]

[h, if(azione > PA && azione > 0), code:{
	[msg = strformat("%s <span style='color:red;font-weight:bold;'>Non ha abbastanza PA per questa Azione.</span>", getName(target))]
	[appendMessaggio(target,sMsgTag,msg)]
	[h: flag = 0]
}]

[h, if(fatica > PF), code:{
	[msg = strformat("%s <span style='color:red;font-weight:bold;'>Non ha abbastanza PF per questa Azione.</span>", getName(target))]
	[appendMessaggio(target,sMsgTag,msg)]
	[h: flag = 0]
}]

[h, if(manaCons > Mana), code:{
	[msg = strformat("%s <span style='color:red;font-weight:bold;'>Non ha abbastanza Mana per questa Azione.</span>", getName(target))]
	[appendMessaggio(target,sMsgTag,msg)]	
	[h: flag = 0]
}]

[h: macro.return = json.append(flag,json.set("","token",target,"PA",azione,"PF",fatica,"mana",manaCons,"MM",move,"PP",iPP))]