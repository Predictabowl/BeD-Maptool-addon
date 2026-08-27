[h: source = json.get(macro.args,0)]
[h: spellName = json.get(macro.args,1)]
[h: modType = json.get(macro.args,2)]

[h: switchToken(source)]
[h: spellTipo = upper(fetchSpellProp(spellName,"tipo"))]
[h: spellScuola = upper(fetchSpellProp(spellName,"scuola"))]
[h: spellTags = fetchSpellProp(spellName,"tags")]

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
	[if (matches(key,"[^@]+@[^@]+")), code:{
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