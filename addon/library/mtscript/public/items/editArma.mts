[macro("items/getIdArma@this"): 0]
[h: sId = macro.return]

[h: oArma = getArma(sId)]
<!-- Edits should be done here -->



<!-- End edits -->
[macro("items/salvaArmaInDB@this"): json.append(oArma,sId)]
