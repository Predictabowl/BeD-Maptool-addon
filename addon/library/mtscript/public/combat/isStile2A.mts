[h: target = arg(0)]
[h: sStile = getProperty("Stile",target)]
[h, if(sStile == "2A"): macro.return=1; macro.return = 0]