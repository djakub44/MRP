function getPreproducts(children,number){
    let preproducts=[]
    let preproduct = {}

    let i = 0

    while(i<(number)){


        //console.log(children.children[i].children[0])
        preproduct = CreateJson(false,children.children[i].children[0])
        //preproduct = children[i].children[0].value
        //console.log(children[i]. value)
        
        preproducts[i] = preproduct
        i++
    }


return preproducts
}

function CreateJson(zerolvl,sel) {
        
        var ElementProduct 
        if (zerolvl){
            ElementProduct = document.getElementById("Product")
        }
        else
        {
            ElementProduct = sel
        }
        let netDemand = 0
        Data = ElementProduct.children[0].value
        arrData = Data.split(",")
        
        if (arrData[1]-arrData[2] > 0 ) 
            {
                netDemand = arrData[1]-arrData[2]
            } else 
            {
                netDemand = 0
            }

        product ={
            "name" : arrData[0],
            "grossDemand": arrData[1],
            "preliminaryStock": arrData[2],
            "netDemand": netDemand,
            "preMounted": arrData[3],
            "scheduledPickup": arrData[4],
            "productionTime": arrData[5],
            "deadline": arrData[6],
            "preProducts" : getPreproducts(ElementProduct.children[2],ElementProduct.children[1].value)
        }


        if (zerolvl){
            setProductJson(product)
            printProductJson()
            console.log(product)
            console.log(product["preProducts"].length)
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