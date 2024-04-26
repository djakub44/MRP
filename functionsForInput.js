
//funkcje do obliczania dat i ilosci osobno na poziom 0, 1 i 2 dla kazdego z wierszy

// Period - how much time it takes / Date - precise number of week
// AmtOne - amount needed for one item / AmtAll - amount needed for all
// 0 - poziom 0, 1 - poziom 1, 2 - poziom 2
// Gross / Stock / Net / Mount / Pickup


function main(){
/*
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
                "amtForUnit": 1, //nowe
                "grossDemand": 7,
                "preliminaryStock": 5,
                "netDemand": 2,
                "preMounted": 7,
                "scheduledPickup": 7,
                "productionTime": 1, //nowe
                "deadline": 7,//nowe
                "preProducts": []
            },
            {
                "name": "Table leg",
                "amtForUnit": 4, //nowe
                "grossDemand": 28,
                "preliminaryStock": 20,
                "netDemand": 28,
                "preMounted": 28,
                "scheduledPickup": 28,
                "productionTime": 1, //nowe
                "deadline": 7,//nowe - musi sie zmieniac
                "preProducts": [
                    {
                        "name": "leg screws",
                        "amtForUnit": 4, //nowe
                        "grossDemand": 112,
                        "preliminaryStock": 50,
                        "netDemand": 28,
                        "preMounted": 28, // nie ma interfejsu na inputowanie tego, ewentualnie mozemy zalozyc ze jest zawsze 0
                        "scheduledPickup": 7,
                        "productionTime": 0, //nowe (raczej zawsze bedzie 0, bo srubek nie trzeba montowac z czesci)
                        "deadline": 6 //nowe
                    }
                ]
            }
        ]
    };

*/

const product = getProductJson();

// logi dla potrzeby brutto
    console.log(product)
    //poziom 0
    var tempG0 = pairGrossDemand0(product["grossDemand"],product["deadline"])
    console.log(tempG0)

    //poziom 1

    for (let i = 0; i < product["preProducts"].length; i++){
    var tempG1 = pairGrossDemand1(
        product["netDemand"],
        product["preProducts"][i]["amtForUnit"],
        product["deadline"],
        product["productionTime"])
    console.log(tempG1)
    }

    //poziom 2
    for (let i = 0; i < product["preProducts"].length; i++){
        for (let j = 0; j < product["preProducts"][i]["preProducts"].length; j++){
        var tempG2 = pairGrossDemand2(
            product["preProducts"][i]["netDemand"],
            product["preProducts"][i]["preProducts"][j]["amtForUnit"],
            product["preProducts"][i]["deadline"],
            product["preProducts"][i]["productionTime"])
        console.log(tempG2)
        }
    }



// logi dla wstepnego zapasu

    //poziom 0
    var tempS0 = pairPreliminaryStock0(product["preliminaryStock"],product["deadline"])
    console.log(tempS0)

    //poziom 1
    for (let i = 0; i < product["preProducts"].length; i++){
    var tempP1 = pairPreliminaryStock1(
        product["preProducts"][i]["preliminaryStock"],
        product["preProducts"][i]["deadline"],
        )
    console.log(tempP1)
    }

    //poziom 2
    for (let i = 0; i < product["preProducts"].length; i++){
        for (let j = 0; j < product["preProducts"][i]["preProducts"].length; j++){
        var tempP2 = pairPreliminaryStock2(
        product["preProducts"][i]["preProducts"][j]["preliminaryStock"],
        product["preProducts"][i]["preProducts"][j]["deadline"],
        )
        console.log(tempP2)
        }
    }



// logi dla potrzeby netto
    
    //poziom 0
    var tempN0 = pairNetDemand0(product["grossDemand"],product["preliminaryStock"],product["deadline"])
    console.log(tempN0)

    //poziom 1
    for (let i = 0; i < product["preProducts"].length; i++){
    var tempN1 = pairNetDemand1(
        product["preProducts"][i]["grossDemand"],
        product["preProducts"][i]["preliminaryStock"],
        product["preProducts"][i]["deadline"]
        )
    console.log(tempN1)
    }

    //poziom 2
    for (let i = 0; i < product["preProducts"].length; i++){
        for (let j = 0; j < product["preProducts"][i]["preProducts"].length; j++){
        var tempN2 = pairNetDemand2(
            product["preProducts"][i]["preProducts"][j]["grossDemand"],
            product["preProducts"][i]["preProducts"][j]["preliminaryStock"],
            product["preProducts"][i]["preProducts"][j]["deadline"]
            )
        console.log(tempN2)
        }
    }

//logow dla wstepnego zmontowania i dla zaplanowanego odbioru nie dokonczylem ale to proste juz, 
//funkcje do tych logow sa gotowe i dobre na bank

// logi dla wstepnego zmontowania

    // //poziom 0
    // var tempM0 = pairPreMounted0(product["grossDemand"],product["preliminaryStock"],product["deadline"])
    // console.log(tempM0)

    // //poziom 1
    // for (let i = 0; i < product["preProducts"].length; i++){
    // var tempN1 = pairPreMounted1(
    //     product["preProducts"][i]["grossDemand"],
    //     product["preProducts"][i]["preliminaryStock"],
    //     product["preProducts"][i]["deadline"]
    //     )
    // console.log(tempM1)
    // }

    // //poziom 2
    // for (let i = 0; i < product["preProducts"].length; i++){
    //     for (let j = 0; j < product["preProducts"][i]["preProducts"].length; j++){
    //     var tempN2 = pairNetDemand2(
    //         product["preProducts"][i]["preProducts"][j]["grossDemand"],
    //         product["preProducts"][i]["preProducts"][j]["preliminaryStock"],
    //         product["preProducts"][i]["preProducts"][j]["deadline"]
    //         )
    //     console.log(tempN2)
    //     }
    // }

// logi dla zaplanowanego odbioru

    // //poziom 0
    // var tempM0 = pairPreMounted0(product["grossDemand"],product["preliminaryStock"],product["deadline"])
    // console.log(tempM0)

    // //poziom 1
    // for (let i = 0; i < product["preProducts"].length; i++){
    // var tempN1 = pairPreMounted1(
    //     product["preProducts"][i]["grossDemand"],
    //     product["preProducts"][i]["preliminaryStock"],
    //     product["preProducts"][i]["deadline"]
    //     )
    // console.log(tempM1)
    // }

    // //poziom 2
    // for (let i = 0; i < product["preProducts"].length; i++){
    //     for (let j = 0; j < product["preProducts"][i]["preProducts"].length; j++){
    //     var tempN2 = pairNetDemand2(
    //         product["preProducts"][i]["preProducts"][j]["grossDemand"],
    //         product["preProducts"][i]["preProducts"][j]["preliminaryStock"],
    //         product["preProducts"][i]["preProducts"][j]["deadline"]
    //         )
    //     console.log(tempN2)
    //     }
    // }
    createProductTable()
    
}


        
    





//
//  funkcje dla wszystkich poziomow potrzeby brutto
//

//poziom 0:

function pairGrossDemand0(gross0AmtAll,gross0Date){
    
    let grossDemand0 = [gross0AmtAll,gross0Date]

    return grossDemand0
    };

//poziom 1:

function pairGrossDemand1(net0AmtAll,gross1AmtForUnit,gross0Date,gross0Period){
    
    let gross1AmtAll = net0AmtAll * gross1AmtForUnit
    let gross1Date = gross0Date - gross0Period

    let grossDemand1 = [gross1AmtAll,gross1Date]

    return grossDemand1
}

//poziom 2:

function pairGrossDemand2(net1AmtAll,gross2AmtForUnit,gross1Date,gross1Period){
    
    let gross2AmtAll = net1AmtAll * gross2AmtForUnit
    let gross2Date = gross1Date - gross1Period
    
    let grossDemand2 = [gross2AmtAll,gross2Date]
    
    return grossDemand2
}





//
//  funkcje dla wszystkich poziomow wstepnego zapasu (II wiersz)
//

//poziom 0:

function pairPreliminaryStock0(stock0AmtAll,stock0Date){
    
    let preliminaryStock0 = [stock0AmtAll,stock0Date]

    return preliminaryStock0
    };

//poziom 1:

function pairPreliminaryStock1(stock1AmtAll,stock1Date){

    let preliminaryStock1 = [stock1AmtAll,stock1Date]
    // tylko ze tu trzeba zrobic ze wszystkie dni do tej daty a nie ze tylko ten dzien
    //nie wiem jak to zrobic

    return preliminaryStock1
}

//poziom 2:

function pairPreliminaryStock2(stock2AmtAll,stock2Date){
    
    let preliminaryStock2 = [stock2AmtAll,stock2Date]
    
    return preliminaryStock2
}





//
//  funkcje dla wszystkich poziomow potrzeby netto (III wiersz)
//

//poziom 0:

function pairNetDemand0(gross0AmtAll,stock0AmtAll,gross0Date){
    
    let net0AmtAll = gross0AmtAll - stock0AmtAll
    let net0Date = gross0Date

    let netDemand0 = [net0AmtAll,net0Date]

    return netDemand0
    };

//poziom 1:

function pairNetDemand1(gross1AmtAll,stock1AmtAll,gross1Date){
    
    let net1AmtAll = gross1AmtAll - stock1AmtAll
    let net1Date = gross1Date
    
    let netDemand1 = [net1AmtAll,net1Date]

    return netDemand1
}

//poziom 2:

function pairNetDemand2(gross2AmtAll,stock2AmtAll,gross2Date){
    
    let net2AmtAll = gross2AmtAll - stock2AmtAll
    let net2Date = gross2Date
    
    let netDemand2 = [net2AmtAll,net2Date]
    
    return netDemand2
}





//
//  funkcje dla wszystkich poziomow wstepnego zmontowania (IV wiersz)
//

//poziom 0:

function pairPreMounted0(net0AmtAll,gross0Date,mount0Period){
    
    let mount0AmtAll = net0AmtAll
    let mount0Date = gross0Date - mount0Period

    let preMounted0 = [mount0AmtAll,mount0Date]

    return preMounted0
    };

//poziom 1:

function pairPreMounted1(net1AmtAll,gross1Date,mount1Period){
    
    let mount1AmtAll = net1AmtAll
    let mount1Date = gross1Date - mount1Period
    
    let preMounted1 = [mount1AmtAll,mount1Date]

    return preMounted1
}

//poziom 2:

function pairPreMounted2(net2AmtAll,gross2Date,mount2Period){
    
    let mount2AmtAll = net2AmtAll
    let mount2Date = gross2Date - mount2Period //mount2Period to raczej zawsze bedzie 0 bo np srubek nie trzeba montowac z niczego tylko sa gotowe
    
    let preMounted2 = [mount2AmtAll,mount2Date]
    
    return preMounted2
}





//
//  funkcje dla wszystkich poziomow zaplanowanego odbioru (V wiersz)
//

//poziom 0:

function pairScheduledPickup0(net0AmtAll,net0Date){
    
    let pickup0AmtAll = net0AmtAll
    let pickup0Date = net0Date

    let scheduledPickup0 = [pickup0AmtAll,pickup0Date]

    return scheduledPickup0
    };

//poziom 1:

function pairScheduledPickup1(net1AmtAll,net1Date){
    
    let pickup1AmtAll = net1AmtAll
    let pickup1Date = net1Date
    
    let scheduledPickup1 = [pickup1AmtAll,pickup1Date]

    return scheduledPickup1
}

//poziom 2:

function pairScheduledPickup2(net2AmtAll,net2Date){
    
    let pickup2AmtAll = net2AmtAll
    let pickup2Date = net2Date
    
    let scheduledPickup2 = [pickup2AmtAll,pickup2Date]
    
    return scheduledPickup2
}





//
// czysta teoria:
//


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