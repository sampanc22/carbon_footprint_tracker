import React from 'react';
import './style.css';
import { PieChart, Pie, Tooltip } from 'recharts';

export default function Summary() {
    let water_cost = Number(localStorage.getItem("water_cost"))
    let gas_cost = Number(localStorage.getItem("gas_cost"))
    let electric_cost = Number(localStorage.getItem("electric_cost")) 
    let suv_miles = Number(localStorage.getItem("suv_miles"))
    let bus_miles = Number(localStorage.getItem("bus_miles"))
    let plane_miles = Number(localStorage.getItem("plane_miles"))

    let meat_cals = Number(localStorage.getItem("meat_cals"))
    let grain_cals = Number(localStorage.getItem("grain_cals"))
    let veg_cals = Number(localStorage.getItem("veg_cals"))
    let dairy_cals = Number(localStorage.getItem("dairy_cals"))
    
    // PER MONTH
    let water_emis = water_cost * 0.085
    // let gas_emis = (gas_cost/60)*483.14
    let electric_emis = electric_cost * 0.818
    let house_emis = (water_emis + electric_emis)

    //DAILY
    let suv_emis = (suv_miles*0.7694)
    let bus_emis = (bus_miles*0.0222)
    let transportation_emis = (suv_emis + bus_emis)
    //monthly
    let plane_emis = (plane_miles*53.3)
    

     //DAILY
    let meat_emis = (meat_cals) * 1.102
    let grain_emis = (grain_cals) * .09237
    let veg_emis = (veg_cals) * 0.0044
    let dairy_emis = (dairy_cals) * 0.00479
   
    let food_emis  = (meat_emis + grain_emis + veg_emis + dairy_emis)

   
    
    let yearly_avg = 28480

    let yearly_food_emi = food_emis * 365;
    let yearly_house_emi = house_emis * 12;
    let yearly_transportation_emi = transportation_emis*365 + plane_emis;
    let yearly_total = yearly_food_emi + yearly_house_emi + yearly_transportation_emi;

    const data = [
        { name: "Transportation", value: ((yearly_transportation_emi)/yearly_total) * 100 , fill: "#7044cb"},
        { name: "Food", value: ((yearly_food_emi)/yearly_total) * 100 , fill: "#f70063"},
        { name: "Housing", value: ((yearly_house_emi)/yearly_total) * 100, fill:"white"},
      ];

    return (
      <>
      <div className='Title'>
        Summary
        <div>
        </div>
      </div>
      <h1>Different Sources of Transmission</h1>
      <PieChart width={500} height={500}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
        />
        <Tooltip />
      </PieChart>
      </>  
    )
};
