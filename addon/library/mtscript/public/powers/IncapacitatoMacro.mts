[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]
[h: bMacroCalled = json.get(macro.args,"macroCalled")]

[h: switchToken(target)]

[macro("powers/IndifesoMacro@this"): macro.args]
[h: sMsg = macro.return]

[h, if(bRemove == 1 || bMacroCalled): return (0, sMsg)]

[macro("powers/rollConcentrazione@this"): json.append(target,source)]
[h: bConc = json.get(macro.return,0)]
[h: sConc = popMessaggio(source,"msgRollConcentrazione")]

[h, if(bConc), code:{
	[macro("InterrompiAzione@Lib:TokenMacros"): target]
	[sSuccess = "Fallito"]
	[sResult = "Interruzione"]
};{
	[macro("forzaInterrompiAzione@Lib:TokenMacros"): target]	
	[sSuccess = "Riuscito"]
	[sResult = "Interruzione Forzata"]
}]

[macro("setAttesa@Lib:TokenMacros"):target]

[h: sMsg = strformat("%{sMsg}<div>Tiro perturbazione su %s: <span title='%{sConc}' style='font-style:italic'>%{sSuccess}</span> &rarr; %{sResult}</div>", getName(target))]

[h: macro.return = sMsg]