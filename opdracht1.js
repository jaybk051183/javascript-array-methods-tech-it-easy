const televisieType = inventory.map((stock) => {
    return stock.name;
})

console.log(televisieType);

const televisiesUitverkocht = inventory.filter(uitverkocht => uitverkocht.originalStock === uitverkocht.sold);

console.log(televisiesUitverkocht);

const televisieambiLight = inventory.filter(ambi => ambi.ambiLight = true);

console.log(televisieambiLight);

inventory.sort((a, b) => a.price - b.price);

console.log(inventory);