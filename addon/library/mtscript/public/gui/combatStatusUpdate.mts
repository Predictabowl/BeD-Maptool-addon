[h: isCombat = isCombat()]
[h: aJsParams = json.append("DialogCambioArmi", "dialog", "setCombat", "null", json.append("", isCombat))]
[h: execFunction("runJsFunction", aJsParams, 0, "all")]