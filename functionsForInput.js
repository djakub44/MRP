
//funkcje do obliczania dat i ilosci osobno na poziom 0, 1 i 2 dla kazdego z wierszy

// t - czas (np. 3 tygodnie), y - data (np. 5-ty tydzien), 
// q - ilosc do zrobienia jednej rzeczy (np. 4 nogi to 1 stol), 
// x - ilosc laczna (np. zeby zrobic 10 stolow to potrzeba 40 nog), 
// Period / Date / AmtOne - amount needed for one item / AmtAll - amount needed for all
// 0 - poziom 0, 1 - poziom 1, 2 - poziom 2
// g - gross row, s - stock row,  n - net row, o - ordered row, p - pickup row
// Gross / Stock / Net / Ordered / Pickup


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
                "productionTime": 1,
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

    var temp = pairGrossDemandP0(product["grossDemand"],product["deadline"])
    console.log(temp)

    for (let i = 0; i < product["preProducts"].length; i++){
    var temp2 = pairGrossDemandP1(
        product["grossDemand"],
        product["preProducts"][i][["grossDemand"][i]["grossDemand"]/["grossDemand"]],
        product["deadline"],
        product["preProducts"][i]["productionTime"])
    console.log(temp2)
    }

    for (let i = 0; i < product["preProducts"].length; i++){
        for (let j = 0; j < product["preProducts"][i]["preProducts"].length; j++){
        var temp3 = pairGrossDemandP2(
            product["preProducts"][i]["grossDemand"],
            product["preProducts"][i][["preProducts"][i]["grossDemand"]/["grossDemand"]],
            product["deadline"],
            product["preProducts"][i]["productionTime"])
        console.log(temp3)
        }
    }
}




//poziom 0:

function pairGrossDemandP0(gross0AmtAll,gross0Date){
    
    let grossDemandP0 = [gross0AmtAll,gross0Date]

    return grossDemandP0
    };

//poziom 1:

function pairGrossDemandP1(gross0AmtAll,gross1AmtOne,gross0Date,gross1Period){
    
    let gross1AmtAll = gross0AmtAll * gross1AmtOne
    let gross1Date = gross0Date - gross1Period

    let grossDemandP1 = [gross1AmtAll,gross1Date]

    return grossDemandP1
}

//poziom 2:

function pairGrossDemandP2(gross1AmtAll,gross2AmtOne,gross1Date,gross2Period){
    
    let gross2AmtAll = gross1AmtAll * gross2AmtOne
    let gross2Date = gross1Date - gross2Period
    
    let grossDemandP2 = [gross2AmtAll,gross2Date]
    
    return grossDemandP2
}

// potrzeby brutto:
//     ilosc: <podana>
//     tydzien: <podany>

// wstepny zapas:
//     ilosc: <podana>
//     tydzien: <od dnia poprzedniego zlecenia na nogi lub poczatku kalendarza 
//     kazdy tydzien do potrzeby brutto>

// potrzeby netto:
//     ilosc: <potrzeby brutto> - <wstepny zapas>
//     tydzien: <potrzeby brutto>

// wstepne zmontowanie:
//     ilosc: <potrzeby netto>
//     tydzien: <potrzeby brutto> - <podany czas na zmontowanie>

// zaplanowany odbior:
//     ilosc: <potrzeby netto> 
//     tydzien: <potrzeby netto>
// (chyba ze dodamy zmienna ile czasu trwa dostawa do klienta ale tego nigdzie nie bylo wymagane)
//
//dodatkowo trzeba zalozyc jakis safety stock dla pre i prepre - np 20% z zaokragleniem w dol