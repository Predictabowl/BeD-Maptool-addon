[h: source = json.get(macro.args,0)]
[h: spellName = json.get(macro.args,1)]
[h: modType = json.get(macro.args,2)]

[h: switchToken(source)]
[h: spellTipo = upper(getLibProperty("tipo",spellName))]
[h: spellScuola = upper(getLibProperty("scuola",spellName))]
[h: spellTags = getLibProperty("tags",spellName)]

[h, if(listContains(spellTags,"OGGETTO")): return(0,json.set("","mod",0,"perc",0))]

[h: listM = json.get(Spell_Mod,modType)]

[h: iMod = 0]
[h: dMod = 0]

[h, foreach(key,listM,"<br>"), code:{
	[itemM = json.get(listM,key)]
	[if (key == spellName), code:{
		[iMod = iMod + json.get(itemM,"flatMod")]
		[dMod = dMod + json.get(itemM,"percMod")]
	}]
	[if (matches(key,".*@Lib:.*")), code:{
		[macro(key): json.append(source,spellName,modType)]
		[iMod = iMod + json.get(itemM,"flatMod")*macro.return]
		[dMod = dMod + json.get(itemM,"percMod")*macro.return]
	}]
	
	
	[key = upper(key)]
	
	[if (key == spellTipo), code:{
		[iMod = iMod + json.get(itemM,"flatMod")]
		[dMod = dMod + json.get(itemM,"percMod")]
	}]
	[if (key == spellScuola), code:{
		[iMod = iMod + json.get(itemM,"flatMod")]
		[dMod = dMod + json.get(itemM,"percMod")]
	}]
	
	[if (key == "ALLSPELLS"), code:{
		[iMod = iMod + json.get(itemM,"flatMod")]
		[dMod = dMod + json.get(itemM,"percMod")]
	}]
	
	[if (listContains(spellTags,key) > 0), code:{
		[iMod = iMod + json.get(itemM,"flatMod")]
		[dMod = dMod + json.get(itemM,"percMod")]
	}]
}]
[h: macro.return = json.set("","mod",iMod,"perc",dMod)]