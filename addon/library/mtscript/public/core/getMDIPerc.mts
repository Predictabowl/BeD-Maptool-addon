[h: source = arg(0)]

[h: fModInt = (getProperty("Conoscenza", source) -5)/100]
[h: macro.return = getProperty("Mod_Danno_Out",source) + fModInt]