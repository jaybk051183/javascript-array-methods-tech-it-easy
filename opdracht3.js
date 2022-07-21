const tvlistContainer = document.getElementById("tv-merken");


const televisieMerk = inventory.map((merk) => {
    return `<li>${merk.brand}</li>`
})

tvlistContainer.innerHTML = `${televisieMerk.join(``)}`


function issueBrandList (brandArray) {

    const tvlistContainer = document.getElementById("tv-merken");

    const televisieMerk = inventory.map((merk) => {
        return `<li>${merk.brand}</li>`
    })

    tvlistContainer.innerHTML = `${televisieMerk.join(``)}`

}

issueBrandList(brandArray);