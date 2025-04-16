'use client'

import { BarChart, LineChart, Line, PieChart, Pie, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
import AdminLanding from '@/components/admincomponents/adminlanding';

const earnings = () => {
    const data = [
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 800,
            amt: 2290
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000
        },

    ];

    return (
        <>
            <div className='flex flex-col flex-wrap items-between flex-center sm:flex-row sm:justify-between sm:items-center'>
                <AdminLanding />
                <AdminLanding />
                <AdminLanding />
                <AdminLanding />
            </div>
            {/* <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>

            <PieChart width={730} height={250}>
                <Pie data={data} dataKey="pv" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data} dataKey="uv" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart> */}
            <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
            

        </>
    )
}

export default earnings