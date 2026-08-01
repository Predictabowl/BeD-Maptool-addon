[h: target = arg(0)]
[h, if(argCount() > 1): bOpp = arg(1); bOpp = 0]

[h, if(bOpp): macro.return = getProperty("Att_Opp_Rimanenti",target); macro.return = getProperty("Att_Rimanenti",target)]
