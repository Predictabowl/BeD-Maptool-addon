[h: oToken = json.get(macro.args,0)]
[h: iPotenza = json.get(macro.args,1)]


[h: iPVMax = getProperty("PV_Max",oToken)]
[h: iPVPen = floor(iPVMax*iPotenza/100)]

[h: dannoTarget(oToken,iPVPen,oToken,"Eccedenza Tossica:",0)]
