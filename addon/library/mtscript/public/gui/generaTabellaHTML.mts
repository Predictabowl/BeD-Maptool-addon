[h: array = macro.args]
[h: listLen = json.length(array)]
[h: strOutput = ""]

[h: classType="oddRow"]
[for (i,0,listLen,1,""), code:{
	[h: element = json.get(array,i)]
	[h: classType = if(classType=="oddRow","evenRow","oddRow")]
	[h: strOutput= strOutput + "<tr class='"+classType+"'> "]
	[macro("gui/generaRigaTabellaHTML@this"):element]
	[h: strOutput = strOutput + macro.return+" </tr>"]
}]
[h: macro.return = strOutput]