[h: remove = json.get(macro.args,"remove")]
[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oMacroParam = json.set(macro.args,"verbose",0,"messaggi",0)]
<!-- servono tutti i parametri standard di core/ApplyEffect@this -->

[h: msg = ""]

[h, if(remove == 1), code:{
	[flag = 1]
	[h: sEffetto = json.get(oMacroParam,"effetto")]
	[h: parameters = json.append(target,sEffetto)]
	[h: effettiTarget = getProperty("Lista_Effetti",target)]
	[h, if(json.isEmpty(effettiTarget) ==0), code:{
		[oEffetto = json.get(effettiTarget,sEffetto)]
	};{
		[oEffetto = ""]
	}]
	[h, if(json.isEmpty(oEffetto) ==0), code:{
		[oInfo = json.get(oEffetto,"otherInfo")]
		[auraMaster = json.get(oInfo,"auraMaster")]		
	};{
		[auraMaster = source]
	}]

	[if (source == auraMaster), code:{
		[macro("core/RemoveEffect@this"): parameters]
	}]
};{
	[macro("core/ApplyEffectIfNotPresent@this"):oMacroParam]
	[msg = popMessaggio(target,"msgEffetto")]
}]

[h: macro.return = msg]