import { useState } from "react";

const useChartConfig = () => {
    const [checkboxList, setCheckboxList] = useState({
    "Source": false,
    "Card model": true,
    "Card number": false,
    "Card name": true,
    "Type": true,
    "Limited": true,
    "№ Operations": true,
    "Date of lost operations": true,
    "Rating": true,
    "Status": true,
    "Price": true,
    });
    
    function handleChange(id) {
    Object.keys(checkboxList).forEach((key) => {
      if (id === key) {
        const newCheckboxList = { ...checkboxList };
        newCheckboxList[key] = !newCheckboxList[key];
        setCheckboxList(newCheckboxList);
      }
    });
    }
    
    return [checkboxList, handleChange]
}

export default useChartConfig;