import { NextRequest, NextResponse } from 'next/server'
import { env } from '@/env.mjs'

export async function GET(req: NextRequest) {
  const locationInput = req.nextUrl.searchParams.get('input') as string

  if (!locationInput) return NextResponse.json({ error: 'INVALID_REQUEST' })

  try {
    const data = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${locationInput}&key=${env.GOOGLE_PLACES_API_KEY}&components=country:us&types=(cities)`
    )
    const response = await data.json()

    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
