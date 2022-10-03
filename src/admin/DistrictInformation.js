import React, { useEffect, useState } from "react";
import axios from "axios";
import PatientTable from "../component/PatientTable";
import LineChart from "../component/LineChart";

const DistrictInformation = () => {

    const mystyle = {
        outerWidth: "100%",
        padding: "10px",
        margin: "10px"
      };

    const [isLoading, setIsLoading] = useState(false);
    const [allData, setAllData] = useState([]);

    const getFetchUsers = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get("http://localhost:3002/patients");
            if (Array.isArray(response.data) && response?.data.length > 0) {
                setAllData(response.data);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFetchUsers();
   }, []);


    return ( 
        <>
                        <LineChart style={mystyle}/>
                        <PatientTable alldata={allData}
            name="Patient Name"/>

        </>
     );
}
 
export default DistrictInformation;

 
