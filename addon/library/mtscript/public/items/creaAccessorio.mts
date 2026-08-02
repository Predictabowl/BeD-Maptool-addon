[h: sNome = "Cintura dell'avventatezza"]
[h: sImg = "Image:CinturaTeschio01"]
[h: sCategoria = "Cintura"]

[h: oAttributi = json.set("","Mod_Danno_Out",0.07,"Mod_Danno_In",0.07)]

[h: sDescrizione = ""]

[h: oJOggetto = json.set("","nome",sNome,"attributi",oAttributi,"categoria",sCategoria,"icona",sImg,"descrizione",sDescrizione)]
[macro("gui/salvaAccessorioInDB@this"): oJOggetto]
