[h: iCurrent = arg(0)]
[h: iMax = arg(1)]

[h, if(!isNumber(iCurrent)): return(0,"")]
[h, if(iMax == 0 && iCurrent == 0): return(0,"")]

[h: macro.return = strformat("%{iCurrent}/%{iMax}")]