import React, { useEffect, useState } from "react";
import Graph from "../component/Graph";
import PatientInfo from "./Patient_info";
import axios from "axios";

function Admin() {
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

    return allData.map((alldata) => (
        <PatientInfo key={alldata.id} data={alldata} />
    ));
}
export default Admin;
