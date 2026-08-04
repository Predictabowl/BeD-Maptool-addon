[h: broadcast("Deprecated: core/checkActionResources@this, use canPayAction instead")]
[h: target = arg(0)]
[h: azione = arg(1)]
[h: fatica = arg(2)]
[h: manaCons = arg(3)]
[h: move = arg(4)]
[h: switchToken(target)]
[h: flag = 1]

[macro("movement/checkMovement@this"):json.append(target,move)]
[h: move = json.get(macro.return,0)]
[h: azione = azione + json.get(macro.return,1)]
[h, if(move > MM  && move > 0), code:{
	[msg = '<span style="color:red;font-weight:bold;">Non hai abbastanza MM per questa Azione.</span>']  
	[broadcast(msg,getPlayerName())]
	[h: flag = 0]
};{}]

[h, if(azione > PA), code:{
	[msg = '<span style="color:red;font-weight:bold;">Non hai abbastanza PA per questa Azione.</span> ']
	[broadcast(msg,getPlayerName())]
	[h: flag = 0]
};{}]
[h, if(fatica > PF), code:{
	[msg = '<span style="color:red;font-weight:bold;">Non hai abbastanza PF per questa Azione.</span> ']
	[broadcast(msg,getPlayerName())]
	[h: flag = 0]
};{}]
[h, if(manaCons > Mana), code:{
	[msg = '<span style="color:red;font-weight:bold;">Non hai abbastanza Mana per questa Azione.</span> ']
	[broadcast(msg,getPlayerName())]
	[h: flag = 0]
};{}]
[h: macro.return = json.append(flag,azione,fatica,manaCons,move)]
