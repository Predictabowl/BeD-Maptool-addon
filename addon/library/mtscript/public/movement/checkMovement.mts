[h: target = json.get(macro.args,0)]
[h: usedMov = json.get(macro.args,1)]
[h: switchToken(target)]

[h: MMcons = 0]
[h: PAcons = 0]

[h, if((MM < usedMov) && (usedMov != 0)), code:{
	[h: MMtodo = usedMov - MM] 
	[r, if(PA < MMtodo), code:{
		[MMcons = MM+100]
		[PAcons = PA+100]
	};{
		[h: PAcons = MMtodo]
		[h: MMcons = MM]
	}]
};{
	[h: MMcons = usedMov]
}]

[h: macro.return = json.append(MMcons,PAcons)]