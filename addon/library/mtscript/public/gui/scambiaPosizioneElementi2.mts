[h: target = json.get(macro.args,"target")]
[h: iVecchiaPos = json.get(macro.args,"vecchiaPos")-1]
[h: iNuovaPos = json.get(macro.args,"nuovaPos")-1]
[h: list =  json.get(macro.args,"lista")]
[h: sReturnMacro = json.get(macro.args,"returnMacro")]

[h: oldItem = listGet(list,iVecchiaPos)]
[h: newItem = listGet(list,iNuovaPos)]
[h: list = listReplace (list,iVecchiaPos,newItem)]
[h: list = listReplace (list,iNuovaPos,oldItem)]


[macro("gui/ordinaListDialog@this"): json.append(target,list,sReturnMacro)]
