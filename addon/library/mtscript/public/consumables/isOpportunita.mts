[h: source = json.get(macro.args,0)]
[h: sItemName = json.get(macro.args,1)]


[h, if (getOverride(source,"NoOpportunita") > 0): return(0,0)]

[h, macro("mobs/getDifendersi@this"): source]
[h, if(macro.return): return(0,0)]

[h: bOpport = getLibProperty("opportunita",sItemName)]
[h: macro.return = bOpport]