[h: target = arg(0)]
[h: sStile = getProperty("Stile",target)]
[h, if(sStile == "AS"): macro.return=1; macro.return = 0]