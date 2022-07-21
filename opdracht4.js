function tvInfo(inventoryElement) {
    return `${inventoryElement.brand} ${inventoryElement.type} - ${inventoryElement.name}`
}

function TvPrice(inventoryElement) {
    return `€${inventoryElement.price},-`;
}

function screenSize(sizes) {
    let output = '';

    for (let i = 0; i < sizes.length; i++) {
        const sizeInches = sizes[i];
        const sizeCm = sizes[i] * 2.54;
        output = output + `${sizeInches} inch (${sizeCm} cm)`;
        if (i < sizes.length - 1) {
            output = `${output} | `;
        }
    }
    return output;
}


const singleTVContainer = document.getElementById("single-tv");

singleTVContainer.innerHTML = `
<h3>${tvInfo(inventory[3])} </h3>
<h4>${TvPrice(inventory[3])}</h4>
<p>${screenSize(inventory[3])}</p>
`

function generateTvList(tvArray) {
    const tvModelList = document.getElementById('inventory-models');

    const modelItems = tvArray.map((tvObject) => {
        return `
      <li>
        <h3>${tvInfo(tvObject)}</h3>
        <h4>${TvPrice(tvObject)}</h4>
        <p>${screenSize(tvObject.availableSizes)}</p>
      </li>
    `;
    });

    tvModelList.innerHTML = `${modelItems.join('')}`;
}

generateTvList(inventory);
