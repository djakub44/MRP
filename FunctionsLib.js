//arguments should always be type of json (object)

//returns json object of product item from storage
function getProductJson(ProductJsonType){
    return sessionStorage.getItem("product")
}   

//set or update product item in storage
function setProductJson(ProductJsonType){
    sessionStorage.setItem("product",JSON.stringify(ProductJsonType))
}

//removes product item from storage
function clearProductJson(ProductJsonType){
    sessionStorage.removeItem("product")

}

//prints product in console
function printProductJson(){
    console.log(sessionStorage.getItem("product"))
}