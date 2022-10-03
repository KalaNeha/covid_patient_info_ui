import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chart from '../component/Chart';
import BTable from '../component/UserTable';

function Home () {
  const [isLoading, setIsLoading] = useState(false)
  const [allData, setAllData] = useState([])   
   const [chartData, setChartData] = useState([])


const getFetchCountries = async() => {
  setIsLoading(true)
  try {
      const response = await axios.get(`http://localhost:3002/countries`);
      if(Array.isArray(response.data) && response?.data.length > 0){
          setAllData(response.data)
          const newChartData = response.data.map((item) =>({
            name: item.name,
            Active: item.active_cases                        ,
            Deaths: item.deaths,
            Closed: item.recover          }
))

setChartData(newChartData)
      }
  setIsLoading(false);
  } catch (error) {
      console.log(error);
  }
    
  }
  useEffect(() => {
    getFetchCountries()
        },[])
    
    return (
        <div>
            <Chart data={chartData}/>
     <BTable
         alldata={allData}
         name={"Country"}
     />
     
 
 </div>
    );


}


export default Home;
