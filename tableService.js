let tablesContainer = document.getElementById("tablesContainer");

/**
 * Creates a product table and appends it to the DOM.
 * @returns {void}
 */
async function createProductTable() {
    // Retrieve JSON data
    let productsJson = await getProductJson();
    /**
     * Recursively creates a table for a product and its pre-products.
     * @param {Object} product - The product object.
     * @param {number} level - The level of the product in the hierarchy.
     * @returns {HTMLElement} - The created table group element.
     */
    function createTable(product, level) {
        // Create a table group element
        let tableGroup = document.getElementById("tableGroup-" + level);
        if (tableGroup === null) {
            tableGroup = document.createElement("div");
            tableGroup.id = "tableGroup-" + level;
            tableGroup.className = "d-flex mb-4 justify-content-between";
        }

        // Create a table div element
        let tableDiv = document.createElement("div");
        tableDiv.className = "mx-2";

        // Create a product name heading element
        let productName = document.createElement("h4");
        productName.innerHTML = product.name;
    

        // Create a table element
        let table = document.createElement("table");
        table.className = "table table-striped table-bordered table-hover";

        // Create a table row for the level
        let tableRow = document.createElement("tr");
        tableRow.className = "align-middle";
        let tableHead = document.createElement("th");
        tableHead.innerHTML = "Level";
        let td = document.createElement("td");
        td.innerHTML = level;
        tableRow.appendChild(tableHead);
        tableRow.appendChild(td);
        table.appendChild(tableRow);

        // Create a table row for the week
        tableRow = document.createElement("tr");
        tableRow.className = "align-middle";
        tableHead = document.createElement("th");
        tableHead.innerHTML = "Week";
        tableRow.appendChild(tableHead);
        for (let i = 1; i <= productsJson.deadline; i++) {
            td = document.createElement("td");
            td.innerHTML = i;
            tableRow.appendChild(td);
        }
        table.appendChild(tableRow);

        // Create a table row for the gross demand
        tableRow = document.createElement("tr");
        tableRow.className = "align-middle";
        tableHead = document.createElement("th");
        tableHead.innerHTML = "Gross demand";
        tableRow.appendChild(tableHead);
        for (let i = 1; i <= productsJson.deadline; i++) {
            td = document.createElement("td");
            
            console.log('ssget("grossDemand0"): ', ssget("grossDemand0")[2]);
            console.log("i: ", i);
            console.log("level: ", level);

            if (i == ssget("grossDemand0")[2] && level == 0) {
                console.log("grossDemand0------------");
                console.log(ssget("grossDemand0")[0]);
                td.innerHTML = ssget("grossDemand0")[0];
            }

            try {
                if (ssget("grossDemand1")[2] == i && level == 1) {
                    td.innerHTML = ssget("grossDemand1")[0];
                }
            } catch (error) {}

            try {
                if (ssget("grossDemand2")[2] == i && level == 2) {
                    td.innerHTML = ssget("grossDemand2")[0];
                }
            } catch (error) {}

            tableRow.appendChild(td);
        }
        table.appendChild(tableRow);

        // Create a table row for the preliminary stock
        tableRow = document.createElement("tr");
        tableRow.className = "align-middle";
        tableHead = document.createElement("th");
        tableHead.innerHTML = "Preliminary stock";
        tableRow.appendChild(tableHead);
        for (let i = 1; i <= productsJson.deadline; i++) {
            td = document.createElement("td");
            if (level == 0 && ssget("preliminaryStock0")[2] <= i) {
                td.innerHTML = ssget("preliminaryStock0")[0];
            } 
            
            try {
                if (level == 1 && i <= ssget("preliminaryStock1")[2]) {
                    td.innerHTML = ssget("preliminaryStock1")[0];
                }
            } catch (error) {}

            try {
                if (level == 2 && i <= ssget("preliminaryStock2")[2]) {
                    td.innerHTML = ssget("preliminaryStock2")[0];
                }
            } catch (error) {}

            tableRow.appendChild(td);
        }
        table.appendChild(tableRow);

        // Create a table row for the net demand
        tableRow = document.createElement("tr");
        tableRow.className = "align-middle";
        tableHead = document.createElement("th");
        tableHead.innerHTML = "Net demand";
        tableRow.appendChild(tableHead);
        for (let i = 1; i <= productsJson.deadline; i++) {
            td = document.createElement("td");
            if (level == 0 && i == ssget("netDemand0")[2]) {
                td.innerHTML = ssget("netDemand0")[0];
            } 
            
            try {
                if (level == 1 && i == ssget("netDemand1")[2]) {
                    td.innerHTML = ssget("netDemand1")[0];
                }
            } catch (error) {}

            try {
                if (level == 2 && i == ssget("netDemand2")[2]) {
                    td.innerHTML = ssget("netDemand2")[0];
                }
            } catch (error) {}

            tableRow.appendChild(td);
        }
        table.appendChild(tableRow);

        // Create a table row for the pre-mounted or ordered
        tableRow = document.createElement("tr");
        tableRow.className = "align-middle";
        tableHead = document.createElement("th");
        if (level == 0) {
            tableHead.innerHTML = "Pre-mounted";
        } else {
            tableHead.innerHTML = "Ordered";
        }
        tableRow.appendChild(tableHead);
        for (let i = 1; i <= productsJson.deadline; i++) {
            td = document.createElement("td");
            if (level == 0 && i == ssget("preMounted0")[2]) {
                td.innerHTML = ssget("preMounted0")[0];
            } 
            
            try {
                if (level == 1 && i == ssget("preMounted1")[2]) {
                    td.innerHTML = ssget("preMounted1")[0];
                }
            } catch (error) {} 
            
            try {
                if (level == 2 && i == ssget("preMounted2")[2]) {
                    td.innerHTML = ssget("preMounted2")[0];
                }
            } catch (error) {} 
                

            tableRow.appendChild(td);
        }
        table.appendChild(tableRow);

        // Create a table row for the scheduled pickup
        tableRow = document.createElement("tr");
        tableRow.className = "align-middle";
        tableHead = document.createElement("th");
        tableHead.innerHTML = "Scheduled pickup";
        tableRow.appendChild(tableHead);
        for (let i = 1; i <= productsJson.deadline; i++) {
            td = document.createElement("td");

            try {
                if (level == 0 && i == ssget("scheduledPickup0")[2]) {
                    td.innerHTML = ssget("scheduledPickup0")[0];
                }
            } catch (error) {}

            try {
                if (level == 1 && i == ssget("scheduledPickup1")[2]) {
                    td.innerHTML = ssget("scheduledPickup1")[0];
                }
            } catch (error) {}

            try {
                if (level == 2 && i == ssget("scheduledPickup2")[2]) {
                    td.innerHTML = ssget("scheduledPickup2")[0];
                }
            } catch (error) {}

            tableRow.appendChild(td);
        }
        table.appendChild(tableRow);

        // Append the product name and table to the table div
        tableDiv.appendChild(productName);
        tableDiv.appendChild(table);

        // Append the table div to the table group
        tableGroup.appendChild(tableDiv);

        // Append the table group to the tables container
        tablesContainer.appendChild(tableGroup);

        // Recursively create tables for pre-products
        if (product.preProducts) {
            product.preProducts.forEach((preProduct) => {
                tableGroup = createTable(preProduct, level + 1);
                tablesContainer.appendChild(tableGroup);
            });
        }

        return tableGroup;
    }

    // Create the table for the main product
    createTable(productsJson, 0);
}

function ssget(name) {
    return sessionStorage.getItem(name);
}




