'use client'

import { Cross2Icon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DataTableViewOptions } from './data-table-view-options'

import { statuses } from './labels'
import { DataTableFacetedFilter } from './data-table-faceted-filter'
import { formatPascalCase } from '@/lib/utils'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  data: TData[]
}

export function DataTableToolbar<TData>({ table, data }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  const uniqueTypes: {
    label: string
    value: string
  }[] = Array.from(new Set(data.map((row: any) => row['type']))).map((type) => ({
    label: formatPascalCase(type),
    value: type,
  }))

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('email')?.setFilterValue(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn('status') && (
          <DataTableFacetedFilter column={table.getColumn('status')} title="Status" options={statuses} />
        )}
        {table.getColumn('type') && (
          <DataTableFacetedFilter column={table.getColumn('type')} title="Type" options={uniqueTypes} />
        )}
        {isFiltered && (
          <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="h-8 px-2 lg:px-3">
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
