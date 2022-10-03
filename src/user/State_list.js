import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BTable from '../component/UserTable';
import Chart from '../component/Chart';


function StateInfo () {
    const [isLoading, setIsLoading] = useState(false)
    const [chartData, setChartData] = useState([])
    const [allData, setAllData] = useState([])

const {country} = useParams();

console.log(country);
const getFetchStates = async() => {
    setIsLoading(true)
    try {
        const response = await axios.get(`http://localhost:3002/${country}`);
        if(Array.isArray(response.data) && response?.data.length > 0){
            setAllData(response.data)
            const newChartData = response.data.map((item) =>({
                        name: item.name,
                        Active: item.active_cases                        ,
                        Deaths: item.deaths,
                        Closed: item.recover
                      }
            ))

            setChartData(newChartData)
        }
    setIsLoading(false);
    } catch (error) {
        console.log(error);
    }
      
    }

    console.log(chartData, "Chart data");

    useEffect(() => {
        getFetchStates()
            },[])
        
        return (
            <div>
                <Chart data={chartData}/>
         <BTable
             alldata={allData}
             name={"State"}
         />
         
     
     </div>
        );
    

}

 
export default StateInfo;