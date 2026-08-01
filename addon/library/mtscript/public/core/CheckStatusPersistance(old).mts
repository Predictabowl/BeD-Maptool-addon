[h: target = json.get(macro.args,0)]
[h: stato = json.get(macro.args,1)]
[h: switchToken(target)]
[h: flag = 0]
[foreach (e,Lista_Effetti,"<br>"), code:{
	[h: sub = json.get(Lista_Effetti,e)]
	[h: s = json.get(sub,"stato")]
	[h, if(s==stato), code:{
		[flag=1]
	}]
}]
[h: macro.return = flag]