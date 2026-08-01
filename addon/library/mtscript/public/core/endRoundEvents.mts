[h: oToken = macro.args]

[h: oEventParam = "{}"]
[macro("events/runEvents@this"): json.set("","source",oToken,"event","On_Round_End","eventParam",oEventParam)]
[macro("utility/popMessaggio@this"): json.set("","token",oToken,"key","msgEventOn_Round_End")]
[h, if(macro.return != ""): broadcast(macro.return)]