[h: target = macro.args]

[macro("class-skills/getAbilitaClasseNormali@this"): json.append(target,"[PECULIARE]")]
[h: lAbilita =  macro.return]
[macro("class-skills/getAbilitaClasseNormali@this"): json.append(target,"[ATTIVA]")]
[h: lAbilita =  json.merge(lAbilita,macro.return)]

[h: sReturn = "<table class='centerNoCollapse' ><tr class='genericTable'><td/><td/><th>PF</th><th>PA</th><th>PP</th><th>MM</th></tr>"]

[h: classType="evenRow"]
[h: tabella = ""]
[h: sRowClass ="oddRow"]
[h, foreach(item, lAbilita), CODE:{
	[if(!isAbilitaPassiva(item)), code:{
		[h: sReturn = strformat("%{sReturn}<tr class='%{sRowClass} spellFont'>")]
		[macro("gui/rigaTabAbilita@this"): json.append(target,item)]
		[h: sReturn = strformat("%{sReturn}%{macro.return}</tr>")]
		[if(sRowClass=="evenRow"): sRowClass="oddRow"; sRowClass="evenRow"]
	}]
}]
[h: sReturn = sReturn + "</table>"]

[h: macro.return = sReturn]