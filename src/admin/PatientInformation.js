import React, { useEffect, useState } from "react";
import PatientInformationDisplay from "../component/PatientInformationDisplay";
import Graph from "../component/Graph";
import axios from "axios";

function PatientInformation() {
    
    const [isLoading, setIsLoading] = useState(false);
    const [allData, setAllData] = useState([]);

    const getFetchUsers = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get("http://localhost:3002/patientInformation");
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

    return allData.map((alldata) => (
        <PatientInformationDisplay key={alldata.id} data={alldata} />

    )
    );
    // return (
    //     <>
    //     <PatientInformationDisplay data={allData}/>
    //     </>
    // );
}
export default PatientInformation;
