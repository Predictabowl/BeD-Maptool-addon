[h: source = arg(0)]
[h: sAuraId = arg(1)]

[h: switchToken(source)]
[h: oAura = json.get(Aure_Attive,sAuraId)]
[h: macro.return = json.get(oAura,"AOE")]