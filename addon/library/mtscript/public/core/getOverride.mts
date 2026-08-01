[h: source = arg(0)]
[h: sTipo = arg(1)]


[h: switchToken(source)]
[h, if(json.type(Overrides) != "OBJECT"): Overrides="{}"]
[h, if(json.contains(Overrides,sTipo)): jOverride = json.get(Overrides,sTipo); jOverride = "{}"]
[h, if(json.isEmpty(jOverride)): iReturn = 0; iReturn = json.get(jOverride,"value")]

[h: macro.return = min(iReturn,1)]