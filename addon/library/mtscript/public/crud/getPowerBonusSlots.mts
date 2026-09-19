[h: tokenId = arg(0)]

[h: switchToken(tokenId)]
[h: iSlotBonus = getCarMana(tokenId) -4 ]
[h: aSlots = "[]"]
[h, if(LC2 < 1 ), code:{
    [aSlots = json.append(iSlotBonus, 0)]
};{
    [fSlots = iSlotBonus / 2]    
    [aSlots = json.append(ceil(fSlots), floor(fSlots))]
}]  
[h: return(0, aSlots)]