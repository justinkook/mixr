import { useQuery } from '@tanstack/react-query'

export const useCurrentLocation = ({
  latitude,
  longitude,
}: {
  latitude?: number
  longitude?: number
}) => {
  return useQuery({
    queryKey: ['geocode', latitude, longitude],
    queryFn: () =>
      fetch(`/api/geocode?lat=${latitude}&lng=${longitude}`).then((res) =>
        res.json()
      ),
    enabled: !!(latitude && longitude),
  })
}
