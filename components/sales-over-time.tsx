'use client'

import React from 'react'
import { format } from 'date-fns'
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  NameType,
  Payload,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  {
    revenue: 1040,
    date: '12-10-2023',
  },
  {
    revenue: 1440,
    date: '12-09-2023',
  },
  {
    revenue: 940,
    date: '12-08-2023',
  },
  {
    revenue: 820,
    date: '12-07-2023',
  },
  {
    revenue: 700,
    date: '12-06-2023',
  },
  {
    revenue: 960,
    date: '12-05-2023',
  },
  {
    revenue: 1124,
    date: '12-04-2023',
  },
]

interface CustomTooltipProps {
  active: boolean | undefined
  payload: Payload<ValueType, NameType>[] | undefined
  label: string
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>${payload[0].value}</CardTitle>
          <CardDescription>
            {format(new Date(label), 'iii, LLL dd')}
          </CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return null
}

export function SalesOverTime() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="revenue"
          activeDot={{
            r: 6,
            fill: '#adfa1d',
          }}
          stroke="#adfa1d"
        />
        <XAxis
          dataKey="date"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(date) => format(new Date(date), 'LL/dd')}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  )
}
