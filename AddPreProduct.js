

function ClearListPreProducts(){
    const PreProductsListElement = document.getElementById("PreProductsList")
    const PreProductName = document.getElementById("PreProductText")

    PreProductName.value = ""
    while (PreProductsListElement.firstChild){
        PreProductsListElement.removeChild(PreProductsListElement.firstChild)
    }   

}

//on change drop down
function ListPreProducts(){

    const PreProductsListElement = document.getElementById("PreProductsList")
    const NumberOfPreProducts = document.getElementById("PreProductLevel")
    
    //clear list
    ClearListPreProducts()

    //append list
    for (let i = 0; i < NumberOfPreProducts.value ; i++){
        
        //name of pre product
        var PreProductNameTextField = document.createElement("textarea")
        PreProductNameTextField.className = "TextArea"
        PreProductNameTextField.id = "PreProduct" + i
        PreProductNameTextField.placeholder = "Enter Name of " + PreProductNameTextField.id

        //production time of pre product
        var PreProductProductionTextField = document.createElement("textarea")
        PreProductProductionTextField.className = "TextAreaNumber"
        PreProductProductionTextField.id = "PreProductProductionTime" + i
        PreProductProductionTextField.placeholder = "Time"
        
        PreProductsListElement.appendChild(document.createElement("br"))
        PreProductsListElement.appendChild(PreProductNameTextField)
        PreProductsListElement.appendChild(PreProductProductionTextField)
    }
}

//button add
function AddPreProduct(){

    const NumberOfPreProducts = document.getElementById("PreProductLevel")
    const PreProductName = document.getElementById("PreProductText")
    const PreProductsListFinal = document.getElementById("PreProductsListFinal")

    //get data from inputs
    var dictPreProduct = {
        "Name" : PreProductName.value,
        "PreProducts" : {}
    }
    for (let i = 0; i < NumberOfPreProducts.value ; i++){
        var Name = document.getElementById("PreProduct"+i).value
        var Time = document.getElementById("PreProductProductionTime"+i).value
        dictPreProduct["PreProducts"][Name] = [Time]
    }
    console.log(dictPreProduct)

    //add to the list on the right side
    
    
    var newElement = document.createElement("li")
    newElement.innerText = dictPreProduct["Name"]
    
    PreProductsListFinal.appendChild(newElement)
    


    for (let i = 0; i < NumberOfPreProducts.value ; i++){
        //name of pre product
        var PreProductNameTextField = document.createElement("textarea")
        PreProductNameTextField.className = "TextArea"
        PreProductNameTextField.id = "PreProduct" + i
        PreProductNameTextField.placeholder = "Enter Name of " + PreProductNameTextField.id

        //production time of pre product
        var PreProductProductionTextField = document.createElement("textarea")
        PreProductProductionTextField.className = "TextAreaNumber"
        PreProductProductionTextField.id = "PreProductProductionTime" + i
        PreProductProductionTextField.placeholder = "Time"
        
        PreProductsListElement.appendChild(document.createElement("br"))
        PreProductsListElement.appendChild(PreProductNameTextField)
        PreProductsListElement.appendChild(PreProductProductionTextField)
    }

}