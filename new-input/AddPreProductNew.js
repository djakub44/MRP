function pies(){
    
    const jsonResult = gatherPreProductsData();
    console.log(jsonResult); // Ou
}

function gatherPreProductsData() {
    // Start with the main product
    const mainProduct = gatherProductData(document.getElementById('productForm'), 0);
    return JSON.stringify(mainProduct, null, 2); // Convert the result to JSON
}

function gatherProductData(formElement, level) {
    if (level > 2) return null; // Pre-products are limited to a maximum depth of 2

    const productData = {};
    const inputs = formElement.querySelectorAll('input[type="text"], input[type="number"]');

    inputs.forEach(input => {
        const label = input.previousElementSibling.textContent.trim().toLowerCase().replace(/\s+/g, '_');
        productData[label] = input.value;
    });

    // Get the number of pre-products
    const preProductsCount = parseInt(formElement.querySelector('select#product-details').value);
    if (preProductsCount > 0) {
        productData.pre_products = [];
        for (let i = 0; i < preProductsCount; i++) {
            const preProductDiv = document.getElementById(`pre-product-input-${i}`);
            if (preProductDiv) {
                productData.pre_products.push(gatherProductData(preProductDiv, level + 1));
            }
        }
    }

    return productData;
}













function getPreproducts(parentPr,number){
    let preproducts=[]
    let preproduct = {}

    let i = 0
    let j = 1

    while(i<(number)){
        k=i+1
        if (parentPr = "Add product details"){
            preproduct = CreateJson(false,"Preproduct "+k)    
        }
        else{
            preproduct = CreateJson(false,parentPr.slice(0,-2)+k)
        }
        
        preproducts[i] = preproduct
        i++
        j = j + 3
    }

    

return preproducts
}

function CreateJson(zerolvl,parentPr) {
        

        const headers = document.querySelectorAll("h1")
        let ElementProduct = null
        headers.forEach(element => {
            if (element.innerText == parentPr)
            {
                ElementProduct = element.nextElementSibling
            }
        });
        console.log(ElementProduct)



        
        let Pr = null
        let PrPreProducts = null
        
        /*
        if (zerolvl){
            ElementProduct = document.getElementById("productForm")
        }
        else
        {
            ElementProduct = document.getElementById(parentPr)
        }
        */
        Pr = ElementProduct

        
        
        let PrName = Pr.children[0].children[1].value //name
        let PrGross = Pr.children[1].children[1].value //Product Gross
        let PrStock = Pr.children[2].children[1].value //Product in Stock
        let PrPreMount = Pr.children[3].children[1].value //Product pre mounted
        let PrProduction = Pr.children[4].children[1].value //Product Production
        let PrDeadline = Pr.children[5].children[1].value //Product Deadline
        let PrAmountForUnit = Pr.children[6].children[1].value //Amount for unit
        let PrPickup = Pr.children[7].children[1].value //Product Pickup
        let netDemand = 0  //net demand

        let PrNumberOfPre = Pr.children[8].children[1].value // number of preproducts
        if (PrNumberOfPre > 0){

            
            //PrPreProducts = ElementProduct.children[2]
            PrPreProducts = document.getElementById(parentPr)
            
        }
        if (PrGross - PrStock > 0 ) //net demand calculation
            {
                netDemand = PrGross - PrStock 
            } else 
            {
                netDemand = 0
            }


        product ={
            "name" : PrName,
            "grossDemand": PrGross,
            "preliminaryStock": PrStock,
            "netDemand": netDemand,
            "preMounted": PrPreMount,
            "scheduledPickup": PrPickup,
            "productionTime": PrProduction,
            "deadline": PrDeadline,
            "amtForUnit" : PrAmountForUnit,
            "preProducts" : getPreproducts(parentPr,PrNumberOfPre)
        }
        

        if (zerolvl){
            //setProductJson(product)
            //printProductJson()
            //console.log(product)
        }
        else
        {
            return product
        }

}

function ListPreProducts(sel) {

    const productElement = sel.parentNode.parentNode
    //const level = parseInt(productElement.id[7]) + 1
    ClearListPreProducts(sel.nextElementSibling);
    
    for (let i = 0; i < sel.value ; i++){
        let clone = productElement.cloneNode(true)
        clone.id = "PreProduct"  
        clone.children["Product"].children[1].value = 0
        ClearListPreProducts(clone.children["Product"].children[2])
        clone.children["Product"].children[0].value = ""
        //clone[2].value = 0
        //sel.parentNode.parentNode.parentNode.appendChild(clone);
        sel.nextElementSibling.appendChild(clone);
    }
    
    
    
}

function ClearListPreProducts(sel) {
    

    while (sel.firstChild) {

        sel.removeChild(sel.firstChild);
    }
}



/* function ClearListPreProducts() {
    const PreProductsListElement = document.getElementById("PreProductsList");
    const PreProductName = document.getElementById("PreProductText");

    PreProductName.value = "";
    while (PreProductsListElement.firstChild) {
        PreProductsListElement.removeChild(PreProductsListElement.firstChild);
    }
}

//on change drop down
function ListPreProducts1() {
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

//button add
function AddPreProduct() {
    const NumberOfPreProducts = document.getElementById("PreProductLevel");
    const PreProductName = document.getElementById("PreProductText");
    const PreProductsListFinal = document.getElementById(
        "PreProductsListFinal"
    );

    //get data from inputs
    var dictPreProduct = {
        Name: PreProductName.value,
        PreProducts: {},
    };
    for (let i = 0; i < NumberOfPreProducts.value; i++) {
        var Name = document.getElementById("PreProduct" + i).value;
        var Time = document.getElementById(
            "PreProductProductionTime" + i
        ).value;
        dictPreProduct["PreProducts"][Name] = [Time];
    }
    console.log(dictPreProduct);

    //add to the list on the right side
    var newElement = document.createElement("li");
    newElement.innerText = dictPreProduct["Name"];
    newElement.id = "final" + dictPreProduct["Name"];
    PreProductsListFinal.appendChild(newElement);

    for (let i = 0; i < NumberOfPreProducts.value; i++) {}
}
*/