"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useEffect,useState } from "react";


export default function SignupChart(){

const [data,setData]=useState([]);


useEffect(()=>{

fetch("/api/admin/analytics")
.then(res=>res.json())
.then(setData);

},[]);



return (

<div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

<h2 className="mb-6 text-xl font-bold text-white">
📈 Signup Growth
</h2>


<div className="h-72">

<ResponsiveContainer width="100%" height="100%">

<LineChart data={data}>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="users"
/>

</LineChart>

</ResponsiveContainer>

</div>


</div>

);

}