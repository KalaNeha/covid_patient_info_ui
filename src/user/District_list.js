import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BTable from '../component/UserTable';
import Chart from '../component/Chart';


function DistrictList () {
    const [isLoading, setIsLoading] = useState(false)
    const [allData, setAllData] = useState([])
    const [chartData, setChartData] = useState([])


    const {state} = useParams();
    const getFetchDistrict = async() => {
        setIsLoading(true)
        try {
            const response = await axios.get(`http://localhost:3002/${state}`);
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
        useEffect(() => {
            getFetchDistrict()
                },[])
            
                return (
                    <div>
                        <Chart data={chartData}/>
                 <BTable
                     alldata={allData}
                     name={"District"}
                 />
                 </div>
                );
            
        
        }
        
         
        export default DistrictList;

