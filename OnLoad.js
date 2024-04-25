document.addEventListener("DOMContentLoaded", function () {
    const ElementDropdown = document.getElementById("PreProductLevel");
    ElementDropdown.value = "0";

    Product = {
        Name: "myproduct",
        Preproducts: [
            {
                Name: "Noga",
                Quantity: 4,
                Preproducts: [
                    { Name: "drewno", Quantity: 4, Time: 5, Preproducts: [] },
                    { Name: "Okleina", Quantity: 4, Time: 5, Preproducts: [] },
                ],
            },
            {
                Name: "Blat",
                Quantity: 4,
                Time: 5,
                Preproducts: [
                    {
                        Name: "drewno na blat",
                        Quantity: 1,
                        Time: 5,
                        Preproducts: [],
                    },
                    {
                        Name: "Okleina Duza",
                        Quantity: 1,
                        Time: 5,
                        Preproducts: [],
                    },
                ],
            },
        ],
    };

    setProductJson(Product);
    var formattedJson = js_beautify(getProductJson(), { indent_size: 2 });
    //console.log(js_beautify(getProductJson(), { indent_size: 2 }));
    // Display the formatted JSON inside the <code> tag
    document.getElementById("productcode").textContent = formattedJson;
});
