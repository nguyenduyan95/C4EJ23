function createDomProdutDetail() {
    let dataLaptopVanphong = JSON.parse(window.localStorage.getItem('laptop_vanphong'));
    let hash = window.location.hash;
    let detailDataVanphong;
    for (let i = 0; i < dataLaptopVanphong.length; i++) {
        if (`#${dataLaptopVanphong[i].id}` === hash) {
            detailDataVanphong = dataLaptopVanphong[i]
        }
    }
    let lapTopVanphong = ""
    lapTopVanphong +=

        `
        <div>
        <p>${detailDataVanphong.model} : ${detailDataVanphong.Cpu} | ${detailDataVanphong.RAM} | ${detailDataVanphong.Storage} | ${detailDataVanphong.Gpu} | ${detailDataVanphong.Display} | ${detailDataVanphong.OS}</p>
        </div>

    <div class="product">
        <div class="imgine_product">
            <img src= ${detailDataVanphong.image} alt="">
        </div>
        <div class="detail_product">
            <table class="infor_product">
                <tr>
                    <th class="attribute-label">Model </th>
                    <td class="attribute-value ">${detailDataVanphong.model}</td>
                </tr>
                <tr>
                    <th class="attribute-label">CPU</th>
                    <td class="attribute-value ">${detailDataVanphong.Cpu}</td>
                </tr>
                <tr>
                    <th class="attribute-label">GPU </th>
                    <td class="attribute-value ">${detailDataVanphong.Gpu}</td>
                </tr>
                <tr>
                    <th class="attribute-label">RAM</th>
                    <td class="attribute-value ">${detailDataVanphong.RAM}</td>
                </tr>
                <tr>
                    <th class="attribute-label">Storage: </th>
                    <td class="attribute-value ">${detailDataVanphong.Storage}</td>
                </tr>
                <tr>
                    <th class="attribute-label">Display</th>
                    <td class="attribute-value ">${detailDataVanphong.Display}</td>
                </tr>
                <tr>
                    <th class="attribute-label">OS Build </th>
                    <td class="attribute-value ">${detailDataVanphong.OS}</td>
                </tr>
                <tr>
                    <th class="attribute-label">Giao tiếp mở rộng </th>
                    <td class="attribute-value ">${detailDataVanphong.communicate}</td>
                </tr>
            </table>
        </div>
    `
    document.getElementsByClassName("nameProduct")[0].innerHTML = lapTopVanphong
}

createDomProdutDetail();