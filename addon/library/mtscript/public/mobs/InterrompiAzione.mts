[h: target = arg(0)]
[h: switchToken(target)]

[macro("events/runEvents@this"): json.set("","source",target,"event","On_Action_Interrupt")]

[macro("utility/getRollBackInitiative@this"):target]
[h: ini = macro.return]
[macro("utility/setFrazionePersonale@this"):json.append(target,ini)]
[h: setInitiative(ini)]
[macro("mobs/clearAzione@this"):target]