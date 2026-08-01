[h: sAttr = arg(0)]
[h, if(argCount() > 1): oToken = arg(1); oToken = currentToken()]

[h, if(esisteProprieta(sAttr)): sDisplay = getPropertyDisplayName("Basic", sAttr); sDisplay = sAttr]

[h: macro.return = sDisplay]