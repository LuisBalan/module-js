function currencyConverter(){
    
    const chooseACountry =
    `¿A qué región desea viajar?\n
    Inserte el número a la izquierda de su destino:\n
    (1) Reino Unido\n
    (2) Union Europea\n
    (3) China\n
    (4) India\n
    (5) Australia`

    const options = ["1", "2", "3", "4", "5"]
   
    function converterTrigger(){
        let exchangeRate

        let currencyInfo = {
            "1": {"rate": 0.036,"name": "libra esterlina",    "symbol": "\u00A3", "isoCode": "GBP"}, 
            "2": {"rate": 0.042,"name": "euro",               "symbol": "\u20AC", "isoCode": "EUR"}, 
            "3": {"rate": 0.32, "name": "yuan",               "symbol": "\u00A5", "isoCode": "CNY"},  
            "4": {"rate": 0.73, "name": "rupia",              "symbol": "\u20B9", "isoCode": "INR"}, 
            "5": {"rate": 0.067,"name": "dolar australiano",  "symbol": "A\$",    "isoCode": "AUD"}  
        } 
        let money = parseFloat(window.prompt("¿Qué cantidad desea convertir"))
        
    
        switch (country){
            case "1":
                exchangeRate = currencyInfo[1]["rate"]
                break;
            case "2":
                exchangeRate = currencyInfo[2]["rate"]
                break;
            case "3":
                exchangeRate = currencyInfo[3]["rate"]
                break;
            case "4":
                exchangeRate = currencyInfo[4]["rate"]
                break;
            default:
                exchangeRate = currencyInfo[5]["rate"]
        }
    
        let convertedCurrency = (money*exchangeRate).toFixed(2)

        console.log(`$${money} MXN equivalen a ${currencyInfo[country]["symbol"]}${convertedCurrency} ${currencyInfo[country]["isoCode"]}.`)
        
    }
   
    let country = window.prompt(`${chooseACountry}`)

    if(options.includes(country)){
        converterTrigger()
    }else{
        console.log("Por favor, ingrese una opción válida.")
    }
}

currencyConverter()

