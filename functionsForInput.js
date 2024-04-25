
//funkcje do obliczania dat i ilosci osobno na poziom 0, 1 i 2 dla kazdego z wierszy

// t - czas (np. 3 tygodnie), y - data (np. 5-ty tydzien), 
// q - ilosc do zrobienia jednej rzeczy (np. 4 nogi to 1 stol), 
// x - ilosc laczna (np. zeby zrobic 10 stolow to potrzeba 40 nog), 
// 0 - poziom 0, 1 - poziom 1, 2 - poziom 2
// g - gross row, s - stock row,  n - net row, o - ordered row, p - pickup row
// tak oznaczone zmienne lacze w np y0g - data poziomu 0 zapotrzebowania brutto


//poziom 0:

function getGrossDemandP0(){
    
    x0g = podane
    y0g = podane

    xy0g = (x0g, y0g) <- (ilosc, data)
    grossDemandP0 = xy0g

    return grossDemandP0
    };

//poziom 1:

function getGrossDemandP1(){
    
    x1g = x0g * q1g
    y1g = y0g - t1g

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