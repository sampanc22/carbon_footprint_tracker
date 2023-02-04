import React from 'react';
import './style.css';
import { addDoc, collection, serverTimestamp, getDocs, setDoc, updateDoc, doc} from 'firebase/firestore'
import { PieChart, Pie, Tooltip } from 'recharts';
import {db, auth} from '../firebase-config'
import { handleNew, handleEdit } from './utils';


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
    
    let water_emis = (water_cost/(52.19))*328.77
    let gas_emis = (gas_cost/60)*483.14
    let electric_emis = (electric_cost/30)*164.38
    let house_emis = (gas_emis + water_emis + electric_emis)

    let suv_emis = (suv_miles*8157)
    let bus_emis = (bus_miles*0.8899)
    let plane_emis = (plane_miles*53.3)
    let transportation_emis = (suv_emis + bus_emis)*365 + plane_emis

    let meat_emis = (meat_cals)*1.102
    let grain_emis = (grain_cals)*.09237
    let veg_emis = (veg_cals)*.0044
    let dairy_emis = (dairy_cals)*.00479
    let food_emis  = (meat_emis + grain_emis + veg_emis + dairy_emis)

    let daily_emis = ((house_emis)/30) + ((transportation_emis)/365) + food_emis
    let monthly_emis = house_emis + ((transportation_emis)/12) + ((food_emis)*30)
    let yearly_emis = (house_emis*12) + (transportation_emis) + (food_emis*365)
    let yearly_avg = 28480

    let yearly_food_emi = food_emis * 365;
    let yearly_house_emi = house_emis * 12;

    const data = [
        { name: "Transportation", value: transportation_emis/(yearly_emis)*100, fill: "#7044cb"},
        { name: "Food", value: yearly_food_emi/yearly_emis*100, fill: "#f70063"},
        { name: "Housing", value: yearly_house_emi/yearly_emis*100, fill:"white"},
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

      <button onClick={handleEdit}>HELLO</button>

      </>  
    )
};

