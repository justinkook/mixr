'use client'

import { Cell, Label, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { NameType, Payload, ValueType } from 'recharts/types/component/DefaultTooltipContent'
import { useMemo } from 'react'

type DataType = {
  name: string
  value: number
}

const data: DataType[] = [
  {
    name: 'General Admission',
    value: 67,
  },
  {
    name: 'VIP',
    value: 23,
  },
  {
    name: 'Early Bird',
    value: 17,
  },
  {
    name: 'Meet & Greet',
    value: 13,
  },
  {
    name: 'Student',
    value: 11,
  },
  {
    name: 'Press',
    value: 8,
  },
  {
    name: 'Senior',
    value: 7,
  },
]

interface CustomTooltipProps {
  active: boolean | undefined
  payload: Payload<ValueType, NameType>[] | undefined
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{`$${payload[0].value}`}</CardTitle>
          <CardDescription>{payload[0].name}</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return null
}

const COLORS = ['#FFB770', '#2127A3', '#A2C089', '#FF8286', '#FFD45B', '#FF785C', '#9BD3D8']

const useTotalRevenue = (data: DataType[]) => {
  return useMemo(() => data.reduce((acc, curr) => acc + curr.value, 0), [data])
}

export function SalesByTicketType() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          stroke="none"
          legendType="circle"
          startAngle={180}
          endAngle={-180}
          cornerRadius={100}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={-10}
          labelLine={false}
          label
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label width={50} position="center" stroke="hsl(var(--foreground))">
            {`$${useTotalRevenue(data)}`}
          </Label>
        </Pie>
        <Tooltip content={({ active, payload }) => <CustomTooltip active={active} payload={payload} />} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
