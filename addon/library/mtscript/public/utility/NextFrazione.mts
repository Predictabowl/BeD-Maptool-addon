[h: broadcast(strformat("DEPRECATED: %s@%s",getMacroName(),getMacroLocation()))]

[h: fr = getProperty("Frazione","MapVar")]
[h: fr = fr + 1]
Frazione n°[r: fr]
[h: setProperty("Frazione",fr,"MapVar")] 
[macro("utility/sortIniziativa@this"):0]