let totalSold = 0;
for(let i = 0; i < inventory.length; i++){
    totalSold += inventory[i].sold;
}
console.log(totalSold);


const container = document.getElementById("tv-sold");

container.innerHTML = `
     <h3>Verkochte TV's</h3>
     <h4>${totalSold}</h4> `


let totalStock = 0;
for(let i = 0; i < inventory.length; i++){
    totalStock += inventory[i].originalStock;
}
console.log(totalStock);


const containerStock = document.getElementById("tv-stock");

containerStock.innerHTML = `
     <h3>Totaal TV's</h3>
     <h4>${totalStock}</h4> `


let expectedSold = totalStock - totalSold
const containerExpected = document.getElementById("tv-expected");

containerExpected.innerHTML = `
<h3>TV's vooraad</h3>
<h4>${expectedSold}</h4>