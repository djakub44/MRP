/*function getPreproducts(children,number){
    let preproducts=[]
    let preproduct = {}

    let i = 0
    //console.log(children)

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
            console.log(product)
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

*/