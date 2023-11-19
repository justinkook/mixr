export interface Album {
  name: string
  organizer: string
  date?: { day: string; month: string }
  time?: string
  location?: string
  cover: string
}

export const listenNowAlbums: Album[] = [
  {
    name: "React Rendezvous",
    organizer: "Ethan Byte",
    date: { day: "01", month: "Feb" },
    time: "7:00 pm - 11:30 pm",
    location: "Williamsburg Hotel, Brooklyn, NY",
    cover: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
  },
  {
    name: "Async Awakenings",
    organizer: "Nina Netcode",
    date: { day: "21", month: "Mar" },
    time: "7:00 pm - 9:00 pm",
    location: "Miami Beach, Miami, FL",
    cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    name: "The Art of Reusability",
    organizer: "Lena Logic",
    date: { day: "17", month: "Apr" },
    time: "7:00 pm - 11:30 pm",
    location: "TBD, Atlanta, GA",
    cover: "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",
  },
  {
    name: "Stateful Symphony",
    organizer: "Beth Binary",
    date: { day: "09", month: "May" },
    time: "9:00 pm - 11:30 pm",
    location: "The Castle, Queens, NY",
    cover: "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
  {
    name: "Making A Splash With Rainwear",
    organizer: "Promoted",
    location: "Introducing The Rains Brand",
    cover: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
  },
  {
    name: "Async Awakenings",
    organizer: "Nina Netcode",
    date: { day: "24", month: "Jul" },
    time: "7:00 pm - 9:00 pm",
    location: "Miami Beach, Miami, FL",
    cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    name: "The Art of Reusability",
    organizer: "Lena Logic",
    date: { day: "25", month: "Jun" },
    time: "7:00 pm - 11:30 pm",
    location: "TBD, Atlanta, GA",
    cover: "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",
  },
  {
    name: "Stateful Symphony",
    organizer: "Beth Binary",
    date: { day: "26", month: "Aug" },
    time: "9:00 pm - 11:30 pm",
    location: "The Castle, Queens, NY",
    cover: "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
  {
    name: "React Rendezvous",
    organizer: "Ethan Byte",
    date: { day: "27", month: "Aug" },
    time: "7:00 pm - 11:30 pm",
    location: "Williamsburg Hotel, Brooklyn, NY",
    cover: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
  },
  {
    name: "Async Awakenings",
    organizer: "Nina Netcode",
    date: { day: "28", month: "Sep" },
    time: "7:00 pm - 9:00 pm",
    location: "Miami Beach, Miami, FL",
    cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    name: "The Art of Reusability",
    organizer: "Lena Logic",
    date: { day: "29", month: "Sep" },
    time: "7:00 pm - 11:30 pm",
    location: "TBD, Atlanta, GA",
    cover: "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",
  },
  {
    name: "Stateful Symphony",
    organizer: "Beth Binary",
    date: { day: "30", month: "Sep" },
    time: "9:00 pm - 11:30 pm",
    location: "The Castle, Queens, NY",
    cover: "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
]

export const madeForYouAlbums: Album[] = [
  {
    name: "Thinking Components",
    organizer: "Lena Logic",
    date: { day: "02", month: "Apr" },
    time: "7:00 am - 7:00 pm",
    location: "The Malin Chelsea, NY",
    cover: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
  },
  {
    name: "Functional Fury",
    organizer: "Beth Binary",
    date: { day: "06", month: "Jul" },
    time: "5:00 pm - 8:30 pm",
    location: "Artech House, Brooklyn, NY",
    cover: "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
  },
  {
    name: "React Rendezvous",
    organizer: "Ethan Byte",
    date: { day: "20", month: "Aug" },
    time: "7:00 pm - 11:30 pm",
    location: "Private Rooftop, Brooklyn, NY",
    cover: "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",
  },
  {
    name: "Stateful Symphony",
    organizer: "Beth Binary",
    date: { day: "12", month: "Sep" },
    time: "7:00 pm - 11:30 pm",
    location: "The Oxford Room NY, NY",
    cover: "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
  },
  {
    name: "Async Awakenings",
    organizer: "Nina Netcode",
    date: { day: "20", month: "Oct" },
    time: "7:00 am - 8:00 am",
    location: "Central Park NY, NY",
    cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    name: "The Art of Reusability",
    organizer: "Lena Logic",
    date: { day: "12", month: "Nov" },
    time: "7:00 pm - 9:30 pm",
    location: "1Hotel Miami, FL",
    cover: "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
  {
    name: "Thinking Components",
    organizer: "Lena Logic",
    date: { day: "23", month: "Nov" },
    time: "7:00 am - 7:00 pm",
    location: "The Malin Chelsea, NY",
    cover: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
  },
  {
    name: "Functional Fury",
    organizer: "Beth Binary",
    date: { day: "25", month: "Dec" },
    time: "5:00 pm - 8:30 pm",
    location: "Artech House, Brooklyn, NY",
    cover: "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
  },
  {
    name: "React Rendezvous",
    organizer: "Ethan Byte",
    date: { day: "26", month: "Dec" },
    time: "7:00 pm - 11:30 pm",
    location: "Private Rooftop, Brooklyn, NY",
    cover: "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",
  },
  {
    name: "Stateful Symphony",
    organizer: "Beth Binary",
    date: { day: "27", month: "Dec" },
    time: "7:00 pm - 11:30 pm",
    location: "The Oxford Room NY, NY",
    cover: "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
  },
  {
    name: "Async Awakenings",
    organizer: "Nina Netcode",
    date: { day: "28", month: "Dec" },
    time: "7:00 am - 8:00 am",
    location: "Central Park NY, NY",
    cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    name: "The Art of Reusability",
    organizer: "Lena Logic",
    date: { day: "29", month: "Dec" },
    time: "7:00 pm - 9:30 pm",
    location: "1Hotel Miami, FL",
    cover: "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
  {
    name: "Thinking Components",
    organizer: "Lena Logic",
    date: { day: "30", month: "Dec" },
    time: "7:00 am - 7:00 pm",
    location: "The Malin Chelsea, NY",
    cover: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
  },
  {
    name: "Functional Fury",
    organizer: "Beth Binary",
    date: { day: "30", month: "Dec" },
    time: "5:00 pm - 8:30 pm",
    location: "Artech House, Brooklyn, NY",
    cover: "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
  },
  {
    name: "React Rendezvous",
    organizer: "Ethan Byte",
    date: { day: "30", month: "Dec" },
    time: "7:00 pm - 11:30 pm",
    location: "Private Rooftop, Brooklyn, NY",
    cover: "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",
  },
  {
    name: "Stateful Symphony",
    organizer: "Beth Binary",
    date: { day: "30", month: "Dec" },
    time: "7:00 pm - 11:30 pm",
    location: "The Oxford Room NY, NY",
    cover: "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
  },
  {
    name: "Async Awakenings",
    organizer: "Nina Netcode",
    date: { day: "30", month: "Dec" },
    time: "7:00 am - 8:00 am",
    location: "Central Park NY, NY",
    cover: "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    name: "The Art of Reusability",
    organizer: "Lena Logic",
    date: { day: "31", month: "Dec" },
    time: "7:00 pm - 9:30 pm",
    location: "1Hotel Miami, FL",
    cover: "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
]
