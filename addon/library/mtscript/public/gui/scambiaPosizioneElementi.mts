<!-- DEPRECATED -->

[h: target = json.get(macro.args,"target")]
[h: iVecchiaPos = json.get(macro.args,"vecchiaPos")-1]
[h: iNuovaPos = json.get(macro.args,"nuovaPos")-1]
[h: list =  json.get(macro.args,"lista")]
[h: sReturnMacro = json.get(macro.args,"returnMacro")]

[h: oldItem = listGet(list,iVecchiaPos)]
[h: list = listDelete (list,iVecchiaPos)]
[h: list = listInsert (list,iNuovaPos,oldItem)]


[macro("gui/ordinaListDialog@this"): json.append(target,list,sReturnMacro)]
