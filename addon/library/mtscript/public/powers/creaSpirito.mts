[h: oToken = arg(0)]


[h: oSpirito="{}"]

[h: lElementi="Acqua,Aria,Fuoco,Terra,Arcano,Mente,Negativo,Positivo"]
[h: bCheck = input ("sNomeS||Nome Spirito",
strformat("sEle1|%{lElementi}|Elemento Dominante|LIST|value=string"))]
[h: assert(bCheck,"Operazione interrotta")]

[macro("core/caseResistName@this"):sEle1]
[h: sEle1 = macro.return]

[h: oSpirito = json.set("","EDS",sEle1)]
[h: setSpirito(oToken,sNomeS,oSpirito)]
