[h: sToken = arg(0)]
[h: iLiv = arg(1)]
[h: sTable = arg(2)]

[h: aPoteri = "[]"]
[h, macro("mechanics/getSummonMemTable@this"): json.append(sToken, sTable)]
[h: aTable = json.path.read(macro.return, strformat("[?(@.livello <= %{iLiv})]"))]
[h, foreach(oPotere, aTable), code:{
	[aPoteri = json.merge(aPoteri, json.get(oPotere, "spells"))]
}]

[h: macro.return = aPoteri]