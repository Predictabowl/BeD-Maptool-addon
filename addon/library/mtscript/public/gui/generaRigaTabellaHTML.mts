[h: array = macro.args]
[h: listLen = json.length(array)]
[h: strOutput = ""]

[for (i,0,listLen,1,""), code:{
	[h: element = json.get(array,i)]
	[h: value = json.get(element,"value")]
	[h: opzioni = json.get(element,"opzioni")]
	[h: strOutput= strformat("%s <td ",strOutput)]
	[h, if (opzioni != ""), code:{
		[strOutput= strformat("%s %s",strOutput,opzioni)]
	}]
	[h: strOutput= strformat("%s>%s</td>",strOutput,value)]
}]
[h: macro.return = strOutput]