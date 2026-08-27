[h: frameName = arg(0)]

[h: frameProp = getFrameProperties(frameName)]
[h, if(json.isEmpty(frameProp)): return(0,"")]
[h: macro.return = json.get(frameProp,"value")]