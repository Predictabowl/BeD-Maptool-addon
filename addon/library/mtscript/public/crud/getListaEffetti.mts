[h: oToken = arg(0)]

[h: oLEffetti = getEffetti(oToken)]
[h: listEffetti = json.fields(oLEffetti)]

[h: macro.return = listEffetti]