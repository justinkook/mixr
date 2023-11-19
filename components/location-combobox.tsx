"use client";

import { useEffect, useState } from "react";
import { ChevronsUpDown, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import axios from "axios";

export function LocationCombobox() {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [addresses, setAddresses] = useState([]);

  const handleClick = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        );
        const locationData = response.data.results[0].address_components;
        const city = locationData.find((component: any) =>
          component.types.includes("locality"),
        ).long_name;
        const state = locationData.find((component: any) =>
          component.types.includes("administrative_area_level_1"),
        ).long_name;
        setCurrentLocation(`${city}`);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const fetchAddress = async (inputText: string) => {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/place/autocomplete/json",
      {
        params: {
          input: inputText,
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        },
      },
    );
    console.log(response.data.results);
    return response.data.results;
  };

  // useEffect(() => {
  //   const fetchResults = async () => {
  //     const results = await fetchAddress(location);
  //     setAddresses(results);
  //   };

  //   fetchResults();
  // }, [location]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="max-w-xs md:max-w-full justify-between -ml-4"
        >
          <h2 className="text-3xl font-bold tracking-tight mt-1 truncate md:whitespace-normal">
            {currentLocation ? currentLocation : "New York"}
            {/* {location && !currentLocation
              ? addresses.find((addresses) => addresses.value === location)
                  ?.label || "New York"
              : ""} */}
          </h2>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Enter Location..."
            value={location}
            onValueChange={(v) => setLocation(v)}
          />
          <CommandEmpty>No places found.</CommandEmpty>
          <CommandGroup>
            {/* {addresses.length > 0 &&
              addresses.map((address) => (
                <CommandItem
                  key={address.value}
                  value={address.value}
                  onSelect={(currentValue) => {
                    setLocation(currentValue === location ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <MapPin
                    className={cn(
                      "mr-2 h-4 w-4",
                      location === address.value ? "opacity-100" : "opacity-50"
                    )}
                  />
                  {address.label}
                </CommandItem>
              ))} */}
            {location.length === 0 && (
              <CommandItem
                onSelect={(currentValue) => {
                  handleClick();
                  setOpen(false);
                }}
              >
                <MapPin className="mr-2 h-4 w-4" />
                Current Location
              </CommandItem>
            )}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
