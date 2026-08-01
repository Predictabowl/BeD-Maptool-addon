[h: oToken = arg(0)]

[h: switchToken(oToken)]
[h: lSpiriti = json.get(Spiriti_Data,"SPIRITI")]
[h: macro.return = json.fields(lSpiriti, "json")]
