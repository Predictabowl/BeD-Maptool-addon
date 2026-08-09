<!-- TODO this implementation may be better, but as long as it works -->
[h: sNomeAb = arg(0)]

[h: abType = upper(fetchClassSkillProp(sNomeAb,"tipo"))]
[h, if(abType == "PASSIVA" || abType == ""): return(0, true); return(0, false)]