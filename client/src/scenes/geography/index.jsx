import {useEffect, useState} from 'react';
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Bar } from 'react-chartjs-2';
import FlexBetween from 'components/FlexBetween';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 4,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Horizontal',
      },
    },
  };

const Geography =() => {
    const [data, setData] = useState({
        labels:['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
          {
            label: 'Dataset 1',
            data:[],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(25, 90, 13, 0.5)',
          },
          {
            label: 'Dataset 2',
            data:[],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      });

    useEffect(()=> {
       const fetchData= async()=> {
           const url = 'https://jsonplaceholder.typicode.com/comments'
           const labelSet = []
           const dataSet1 = [];
           const dataSet2 = [];
         await fetch(url).then((data)=> {
             console.log("Api data", data)
             const res = data.json();
             return res
         }).then((res) => {
             console.log("ressss", res)
            for (const val of res) {
                dataSet1.push(val.id);
                dataSet2.push(val.postId)
                // labelSet.push(val.name)
            }
            setData({
                labels:['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                datasets: [
                  {
                    label: 'Dataset ID',
                    data:dataSet1,
                    borderColor: 'rgb(355, 99, 132)',
                    backgroundColor: 'rgba(99, 232, 0.5)',
                  },
                  {
                    label: 'Dataset ID2',
                    data:dataSet2,
                    borderColor: 'rgb(53, 182, 235)',
                    backgroundColor: 'rgba(53, 135, 0.5)',
                  },
                ],
              })
            console.log("aData", dataSet1, dataSet2)
         }).catch(e => {
                console.log("error", e)
            })
        }

        fetchData();
    },[])

    return(
        <div style={{width:'70%', height:'50%'}}>
            { <Box
                m = "10rem 4.5rem"
                p = "10rem"
              >
              <Header title="CHART INFO LINEAL" subtitle="Info about your transactions." />
            </Box>
            }
            <Box>
              <Bar data={data} options={options}/>
            </Box>
            <Box
             m= "5rem 5.5rem"
            >
              <FlexBetween>Hellooooooooooooooooooooooooooooooooooooooooooooooooooooooooo</FlexBetween>
            </Box>

         </div>)
}
export default Geography;


















// import React from "react";
// import { Box, useTheme } from "@mui/material";
// import { useGetGeographyQuery } from "state/api";
// import { ResponsiveChoropleth } from "@nivo/geo";
// import { geoData } from "state/geoData";
// import Header from "components/Header";

// const Geography = () => {
//   const theme = useTheme();
//   const { data } = useGetGeographyQuery();
//   console.log("🥨  Geography  data", data);

//   return (
//     <Box m="1.5rem 2.5rem">
//       <Header title="GEOGRAPHY" subtitle="All your users location." />
//       <Box
//         mt="40px"
//         height="75vh"
//         border={`1px solid ${theme.palette.secondary[200]}`}
//         borderRadius="4px"
//       >
//         {data ? (
//           <ResponsiveChoropleth
//             data={data}
//             theme={{
//               axis: {
//                 domain: {
//                   line: {
//                     stroke: theme.palette.secondary[200],
//                   },
//                 },
//                 legend: {
//                   text: {
//                     fill: theme.palette.secondary[200],
//                   },
//                 },
//                 ticks: {
//                   line: {
//                     stroke: theme.palette.secondary[200],
//                     strokeWidth: 1,
//                   },
//                   text: {
//                     fill: theme.palette.secondary[200],
//                   },
//                 },
//               },
//               legends: {
//                 text: {
//                   fill: theme.palette.secondary[200],
//                 },
//               },
//               tooltip: {
//                 container: {
//                   color: theme.palette.primary.main,
//                 },
//               },
//             }}
//             features={geoData.features} //mandatory
//             margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
//             domain={[0, 60]}
//             unknownColor="#666666"
//             label="properties.name"
//             valueFormat=".2s"
//             projectionScale={150}
//             projectionTranslation={[0.45, 0.6]}
//             projectionRotation={[0, 0, 0]}
//             borderWidth={1.3}
//             borderColor="#ffffff"
//             legends={[
//               {
//                 anchor: "bottom-right",
//                 direction: "column",
//                 justify: true,
//                 translateX: 0,
//                 translateY: -125,
//                 itemsSpacing: 0,
//                 itemWidth: 94,
//                 itemHeight: 18,
//                 itemDirection: "left-to-right",
//                 itemTextColor: theme.palette.secondary[200],
//                 itemOpacity: 0.85,
//                 symbolSize: 18,
//                 effects: [
//                   {
//                     on: "hover",
//                     style: {
//                       itemTextColor: theme.palette.background.alt,
//                       itemOpacity: 1,
//                     },
//                   },
//                 ],
//               },
//             ]}
//           />
//         ) : (
//           <>Loading...</>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default Geography;
