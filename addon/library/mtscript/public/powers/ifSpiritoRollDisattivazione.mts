[h: oToken = arg(0)]
[h: sSpirito = getSpiritoAttivo(oToken)]
[h, if(sSpirito == ""): return(0,0)]


[h, macro("powers/rollRichiamoSpirito@this"):json.append(oToken,sSpirito)]
[h: jRollResult = macro.return]
[h: bResult = json.get(jRollResult,0)]
[h, if(bResult): return(0, 0)]

[h, macro("powers/disattivaSpirito@this"): oToken]
[h: sMsg = strformat("%s: Tiro arrivazione spirito %{sSpirito} fallito, %s", getName(oToken), json.get(jRollResult,1))]
[h: lOwners = getOwners(",", oToken)]
[h, if(isOwnedByAll(oToken)): lOwners = "all"]
[h: broadcast(lOwners)]
[h, if(listCount(lOwners) > 0): execFunction("updateSchedaPoteri", json.append("","","", json.set("","forceVisible",1)), 0, lOwners)]
[h, if(!listContains(lOwners,"all")): lOwners = listAppend(lOwners, "gm")]
[h: broadcast(sMsg, lOwners)]

	