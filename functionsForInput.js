
//funkcje do obliczania dat i ilosci osobno na poziom 0, 1 i 2 dla kazdego z wierszy

// t - czas (np. 3 tygodnie), y - data (np. 5-ty tydzien), 
// q - ilosc do zrobienia jednej rzeczy (np. 4 nogi to 1 stol), 
// x - ilosc laczna (np. zeby zrobic 10 stolow to potrzeba 40 nog), 
// 0 - poziom 0, 1 - poziom 1, 2 - poziom 2
// g - gross row, s - stock row,  n - net row, o - ordered row, p - pickup row
// tak oznaczone zmienne lacze w np y0g - data poziomu 0 zapotrzebowania brutto


function main(){

    //product = getProductJson()
    const product = {
        "name": "Table",
        "grossDemand": 10,
        "preliminaryStock": 3,
        "netDemand": 7,
        "preMounted": 7,
        "scheduledPickup": 7,
        "productionTime": 1,
        "deadline": 8,
        "preProducts": [
            {
                "name": "Tabletop",
                "grossDemand": 7,
                "preliminaryStock": 0,
                "netDemand": 7,
                "preMounted": 7,
                "scheduledPickup": 7,
                "preProducts": []
            },
            {
                "name": "Table leg",
                "grossDemand": 28,
                "preliminaryStock": 0,
                "netDemand": 28,
                "preMounted": 28,
                "scheduledPickup": 28,
                "preProducts": [
                    {
                        "name": "leg screws",
                        "grossDemand": 28,
                        "preliminaryStock": 0,
                        "netDemand": 28,
                        "preMounted": 28,
                        "scheduledPickup": 7,
                        "preProducts": []}
                ]
            }
        ]
    };

    var temp = getGrossDemandP0(product["grossDemand"],product["deadline"])
    console.log(temp)


    for (let i = 0; i < 2 ; i++){
        //console.log(product["preProducts"][i])
        
    }
    
    var temp2 = getGrossDemandP1()

}




//poziom 0:

function getGrossDemandP0(x0g,y0g){
    

    let xy0g = [x0g, y0g] // (ilosc, data)
    grossDemandP0 = xy0g

    return grossDemandP0
    };

//poziom 1:

function getGrossDemandP1(x0g,q1g,y0g,t1g){
    
    let x1g = x0g * q1g
    let y1g = y0g - t1g

    xy1g = (x1g,y1g)
    grossDemandP1 = xy1g

    return grossDemandP1
}

//poziom 2:

function getGrossDemandP2(){
    
    x2g = x1g * q2g
    y2g = y1g - t2g

    xy2g = (x2g,y2g)
    grossDemandP2 = xy2g
    return grossDemandP2
}