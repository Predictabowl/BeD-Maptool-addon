[h: target = getImpersonated()]
[h: sFrame = getStrProp(macro.args,"frame")]
[h: sFrame = sFrame +"@this"]
[h, macro(sFrame): target]