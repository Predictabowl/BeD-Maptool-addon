[h: list = getInitiativeList()]
[h: list = json.get(list,"tokens")]
[h: num = json.length(list)]
[h: time = 0]
[h, if(num>0), code:{
	[first = json.get(list,0)]
	[time = json.get(first,"initiative")]
	[tokenList = json.append("",first)]
}]
[h: i=1]
[h, while(i<num), code:{
	[next = json.get(list,i)]
	[ini = json.get(next,"initiative")]
	[h, if(ini<= time), code:{ 
		[tokenList = json.append(tokenList,next)] 
	};{
		[i=num]
	}]
	[i= i+1]
}]

[h: macro.return = tokenList]