[h: var = json.get(macro.args,0)]
[h: value = json.get(macro.args,1)]
[h: string = json.get(macro.args,2)]
[r, if (var == value ), code: {
	[r: string]
};{}]