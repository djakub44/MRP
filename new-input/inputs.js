let namesTable = [
    "Pre product name",
    "Product Gross",
    "Product in stock",
    "Product pre mounted",
    "Product production time",
    "Product deadline",
    "Amount for unit",
    "Product pickup week",
    "Amount of pre products",
];
let preproductInputDiv;
let childDivId;

function showPreproductInputs(sel, divName) {
    preproductInputDiv = document.getElementById(divName);
    if (sel.value == 0) {
        preproductInputDiv.style.display = "hidden";
        preproductInputDiv.innerHTML = "";
    } else {
        preproductInputDiv.innerHTML = "";
        preproductInputDiv.classList.add("container");
        preproductInputDiv.classList.add("py-5");
        preparePreProductInputs(sel.value);
    }
}

function preparePreProductInputs(preproductCount) {
    for (let i = 1; i <= preproductCount; i++) {
        childDivId = preproductInputDiv.id + "-" + i;

        let preproductHeading = getHeading(i);
        preproductInputDiv.appendChild(preproductHeading);

        let preproductRow = getRow(i);
        preproductInputDiv.appendChild(preproductRow);

        let newInputDiv = document.createElement("div");
        newInputDiv.id = childDivId;
        preproductInputDiv.appendChild(newInputDiv);
    }
}

function getHeading(i) {
    let preproductHeading = document.createElement("h3");
    preproductHeading.innerHTML = "Preproduct " + getDivNumber() + i;
    return preproductHeading;
}

function getRow(i) {
    preproductRow = document.createElement("div");
    preproductRow.className = "row py-3";

    namesTable.forEach((name) => {
        let preproductCol = getCol(name, i);
        preproductRow.appendChild(preproductCol);
    });

    return preproductRow;
}

function getCol(name, i) {
    let preproductCol = document.createElement("div");
    preproductCol.className = "col-3";

    let preLabel = document.createElement("label");
    preLabel.innerHTML = name;
    preLabel.classList.add("form-label");
    preLabel.style.color = "var(--bs-emphasis-color)";
    preLabel.style.fontSize = "20px";

    let preInput = getInput(name, i);
    preproductCol.appendChild(preLabel);
    preproductCol.appendChild(preInput);

    return preproductCol;
}

function getInput(name, i) {
    let preInput;
    if (name === namesTable[0]) {
        preInput = document.createElement("input");
        preInput.type = "text";
    } else if (name === namesTable[8]) {
        preInput = getSelect();
    } else {
        preInput = document.createElement("input");
        preInput.type = "number";
    }

    preInput.className =
        "form-control d-xxl-flex flex-wrap justify-content-xxl-end align-items-xxl-center";

    preInput.id = name.replace(/\s/g, "") + getDivNumber() + i;

    return preInput;
}

function getSelect() {
    let select = document.createElement("select");
    select.className = "form-select";
    select.id = "Amount of pre products".trim();
    select.setAttribute(
        "onchange",
        "showPreproductInputs(this, '" + childDivId + "')"
    );

    optGroup = document.createElement("optgroup");
    optGroup.label = "How many pre products?";

    let option = document.createElement("option");
    option.value = 0;
    option.innerHTML = "0";
    option.selected = true;
    optGroup.appendChild(option);

    for (i = 1; i <= 2; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        optGroup.appendChild(option);
    }

    select.appendChild(optGroup);

    return select;
}

function getDivNumber() {
    let divNumber = preproductInputDiv.id.charAt(
        preproductInputDiv.id.length - 1
    );
    console.log(divNumber);
    if (isNaN(divNumber)) {
        return "";
    }
    return divNumber + "-";
}
