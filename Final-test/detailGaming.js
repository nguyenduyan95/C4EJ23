

function createDomProdutDetail() {
    let dataLaptop = JSON.parse(window.localStorage.getItem('laptop_gaming'));
    let hash = window.location.hash;
    let detailData;
    for (let i = 0; i < dataLaptop.length; i++) {
        if (`#${dataLaptop[i].id}` === hash) {
            detailData = dataLaptop[i]
        }
    }
    let lapTop = ""
    lapTop +=

        `
        <div>
        <p>${detailData.model} : ${detailData.Cpu} | ${detailData.RAM} | ${detailData.Storage} | ${detailData.Gpu} | ${detailData.Display} | ${detailData.OS}</p>
        </div>

    <div class="product">
        <div class="imgine_product">
            <img src= ${detailData.image} alt="">
        </div>
        <div class="detail_product">
            <table class="infor_product">
                <tr>
                    <th class="attribute-label">Model </th>
                    <td class="attribute-value ">${detailData.model}</td>
                </tr>
                <tr>
                    <th class="attribute-label">CPU</th>
                    <td class="attribute-value ">${detailData.Cpu}</td>
                </tr>
                <tr>
                    <th class="attribute-label">GPU </th>
                    <td class="attribute-value ">${detailData.Gpu}</td>
                </tr>
                <tr>
                    <th class="attribute-label">RAM</th>
                    <td class="attribute-value ">${detailData.RAM}</td>
                </tr>
                <tr>
                    <th class="attribute-label">Storage: </th>
                    <td class="attribute-value ">${detailData.Storage}</td>
                </tr>
                <tr>
                    <th class="attribute-label">Display</th>
                    <td class="attribute-value ">${detailData.Display}</td>
                </tr>
                <tr>
                    <th class="attribute-label">OS Build </th>
                    <td class="attribute-value ">${detailData.OS}</td>
                </tr>
                <tr>
                    <th class="attribute-label">Giao tiếp mở rộng </th>
                    <td class="attribute-value ">${detailData.communicate}</td>
                </tr>
            </table>
        </div>
    `
    document.getElementsByClassName("nameProduct")[0].innerHTML = lapTop
}

createDomProdutDetail();