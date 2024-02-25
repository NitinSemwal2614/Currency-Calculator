import { useEffect, useState } from "react";


function useCurrencyInfo(currency){ // Parameter set

    const [data, setData] = useState({})   //create useState with empty object
    useEffect(() => {

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)

        .then((res) => res.json())
        .then((res) => setData(res[currency])) //Parameter Called

        console.log(data);
    }, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;