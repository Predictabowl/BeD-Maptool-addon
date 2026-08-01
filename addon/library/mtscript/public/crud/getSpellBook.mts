[h: oToken = arg(0)]

[h: switchToken(oToken)]
[h: lPoteri = json.get(Poteri_Conosciuti, "LIBROINCANTESIMI")]
[h, if(json.type(lPoteri) != "ARRAY"): lPoteri="[]"]

[h: macro.return = lPoteri]
