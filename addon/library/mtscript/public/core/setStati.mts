[h: count = json.get(macro.args,0)]
[h: id = json.get(macro.args,1)]
[h, for(i,0,count,1), code:{
	[j= (i+1)*2]
	[stato = json.get(macro.args,j)]
	[valore = json.get(macro.args,j+1)]
	[setState(stato,valore,id)]
	[if (valore == 1), code:{
		[r: id]
		[r: stato] <br>
	}]
}]