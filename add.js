function CreateJson(sel) {
    
    if (sel.id == "PreProductLevel0"){
        const ElementProduct = document.getElementById("ProductLvl0")
        product ={}
        var children = ElementProduct.childNodes;
        let netDemand = 0
        
            console.log(children[1].value);
            
            if (children[2].value-children[3].value < 0 ) 
            {
                netDemand = 0
            } else 
            {
                netDemand = children[2].value-children[3].value
            }
            
            product = {
                "name": children[1].value,
                "grossDemand": children[2].value,
                "preliminaryStock": children[3].value,
                "netDemand": netDemand,
                "preMounted": children[5].value,
                "scheduledPickup": children[5].value,
                "productionTime": children[6].value,
                "deadline": children[7].value,
                "preProducts":[]
            }
    }


    setProductJson(product)
    printProductJson()
}



function ListPreProducts(sel) {

    console.log(sel.id)
    
    const PreProductsListElement = document.getElementById("PreProductsList");
    const NumberOfPreProducts = document.getElementById("PreProductLevel");
    
    //clear list
    ClearListPreProducts();
    console.log(NumberOfPreProducts.value)
    //append list
    for (let i = 0; i < NumberOfPreProducts.value; i++) {
        //name of pre product
        var PreProductNameTextField = document.createElement("input");
        PreProductNameTextField.className = "form-control ml-2";
        PreProductNameTextField.id = "PreProduct" + i;
        PreProductNameTextField.placeholder =
            "Enter Name of " + PreProductNameTextField.id;

        //production time of pre product
        var PreProductProductionTextField = document.createElement("input");
        PreProductProductionTextField.className = "form-control ml-2";
        PreProductProductionTextField.id = "PreProductProductionTime" + i;
        PreProductProductionTextField.placeholder = "Time";

        PreProductsListElement.appendChild(document.createElement("br"));
        PreProductsListElement.appendChild(PreProductNameTextField);
        PreProductsListElement.appendChild(PreProductProductionTextField);
    }
}