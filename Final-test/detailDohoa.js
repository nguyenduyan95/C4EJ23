function createDomProdutDetail() {
    let dataLaptopDohoa = JSON.parse(window.localStorage.getItem('laptop_Dohoa'));
    let hash = window.location.hash;
    let detailLaptopDohoa;
    for (let i = 0; i < dataLaptop.length; i++) {
        if (`#${dataLaptop[i].id}` === hash) {
            detailLaptopDohoa = dataLaptopDohoa[i]
        }
    }
    let lapTopDohoa = ""
    lapTopDohoa +=

        `
        <div>
        <p>${detailLaptopDohoa.model} : ${detailLaptopDohoa.Cpu} | ${detailLaptopDohoa.RAM} | ${detailLaptopDohoa.Storage} | ${detailLaptopDohoa.Gpu} | ${detailLaptopDohoa.Display} | ${detailLaptopDohoa.OS}</p>
        </div>

    <div class="product">
        <div class="imgine_product">
            <img src= ${detailLaptopDohoa.image} alt="">
        </div>
        <div class="detail_product">
            <table class="infor_product">
                <tr>
                    <th class="attribute-label">Model </th>
                    <td class="attribute-value ">${detailLaptopDohoa.model}</td>
                </tr>
                <tr>
                    <th class="attribute-label">CPU</th>
                    <td class="attribute-value ">${detailLaptopDohoa.Cpu}</td>
                </tr>
                <tr>
                    <th class="attribute-label">GPU </th>
                    <td class="attribute-value ">${detailLaptopDohoa.Gpu}</td>
                </tr>
                <tr>
                    <th class="attribute-label">RAM</th>
                    <td class="attribute-value ">${detailLaptopDohoa.RAM}</td>
                </tr>
                <tr>
                    <th class="attribute-label">Storage: </th>
                    <td class="attribute-value ">${detailLaptopDohoa.Storage}</td>
                </tr>
                <tr>
                    <th class="attribute-label">Display</th>
                    <td class="attribute-value ">${detailLaptopDohoa.Display}</td>
                </tr>
                <tr>
                    <th class="attribute-label">OS Build </th>
                    <td class="attribute-value ">${detailLaptopDohoa.OS}</td>
                </tr>
                <tr>
                    <th class="attribute-label">Giao tiếp mở rộng </th>
                    <td class="attribute-value ">${detailLaptopDohoa.communicate}</td>
                </tr>
            </table>
        </div>
    `
    document.getElementsByClassName("nameProduct")[0].innerHTML = lapTopDohoa
}

createDomProdutDetail();