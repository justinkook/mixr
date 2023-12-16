import { env } from '@/env.mjs'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const lat = req.nextUrl.searchParams.get('lat') as string
  const lng = req.nextUrl.searchParams.get('lng') as string

  if (!lat || !lng) return NextResponse.json({ error: 'INVALID_REQUEST' })

  try {
    const data = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${env.GOOGLE_PLACES_API_KEY}&components=locality`
    )
    const response = await data.json()
    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
