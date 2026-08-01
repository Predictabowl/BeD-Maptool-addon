[h: target = json.get(macro.args,0)]
[h: params = json.get(macro.args,1)]
[h: iMolt = json.get(macro.args,2)]

[h: key = json.get(params,"key")]
[h: value = json.get(params,"value")]
[h: bMolt = json.get(params,"moltiplicabile")]
[h, if(!isNumber(bMolt)): bMolt = 0]
[h, if(!bMolt): iMolt = 1]

[h: oldValue = getProperty(key,target)]
[h, if(isNumber(oldValue)), code:{
	[h: oldValue = oldValue + value*iMolt]
};{
	[h: oldValue = listAppend(oldValue, value)]
}]
[h: setProperty(key, oldValue,target)]
