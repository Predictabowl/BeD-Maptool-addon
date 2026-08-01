[h: oToken = arg(0)]
[h: iArma = arg(1)]

[h: sPropName = "Tipo_Danno_Arma" + iArma]

[h: macro.return = getProperty(sPropName, oToken)]