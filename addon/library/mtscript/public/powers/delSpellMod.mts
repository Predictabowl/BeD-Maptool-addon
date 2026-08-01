[h: source = json.get(macro.args,0)]
[h: modSpan = json.get(macro.args,1)]
[h: modType = json.get(macro.args,2)]
[h: switchToken(source)]

[h, if(json.contains(Spell_Mod,modType)), code:{
	[h: listM = json.get(Spell_Mod,modType)]
	[listM = json.remove(listM,modSpan)]
	[if(json.isEmpty(listM)), code:{
		[h: Spell_Mod = json.remove(Spell_Mod,modType)]
	};{
		[h: Spell_Mod = json.set(Spell_Mod,modType,listM)]
	}]
}]

