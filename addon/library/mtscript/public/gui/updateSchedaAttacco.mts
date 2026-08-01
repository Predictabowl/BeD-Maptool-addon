[h: source = json.get(macro.args,0)]
[h, if(json.length(macro.args)>1): sFrame = json.get(macro.args,1); sFrame = "Scheda"]

[macro("gui/updateFrameIfVisible@this"): json.append(source,sFrame,"gui/ApriScheda@this")]