import { useQuery } from '@tanstack/react-query'

export const usePlaceAutocomplete = (locationInput?: string) => {
  return useQuery({
    queryKey: ['place', locationInput],
    queryFn: () =>
      fetch(`/api/place?input=${locationInput}`).then((res) => res.json()),
    enabled: !!(locationInput && locationInput.length > 0),
  })
}
