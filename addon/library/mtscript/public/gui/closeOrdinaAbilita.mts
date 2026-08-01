[h: target = json.get(macro.args,"target")]
[h: oList = json.get(macro.args,"lista")]

[h: oJsonObj = "{}"]
[h: oldSkill = getProperty("Abilita_Classe",target)]

[h, foreach(sItem,oList), code:{
	[oItem = json.get(oldSkill,sItem)]
	[oJsonObj = json.set(oJsonObj,sItem,oItem)]
}]


[h: setProperty("Abilita_Classe",oJsonObj,target)]
[h:closeDialog("Ordinamento")]
[macro("gui/updateFrameAzioni@this"):target]