document.addEventListener("DOMContentLoaded", function () {

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
});
