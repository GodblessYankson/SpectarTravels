import { Greece, Ghana, TourArrow, Dubai, HomeDest, HomeCalendar, Search, tourDubai, tourKenya, tourSingapore, tourGhana, tourEgypt, tourItaly, clock, destination } from "../assets"
export const tour = [
    {
        id: 1,
        name: "Dubai",
        src: Dubai,
        arrow: TourArrow
    },
    {
        id: 2,
        name: "Ghana",
        src: Ghana,
        arrow: TourArrow
    },
    {
        id: 3,
        name: "Greece",
        src: Greece,
        arrow: TourArrow
    },
    {
        id: 4,
        name: "Ghana",
        src: Ghana,
        arrow: TourArrow
    },
    {
        id: 5,
        name: "Greece",
        src: Greece,
        arrow: TourArrow
    }
];

export const TourPackages = [
    {
        id: 1,
        name: "Dubai Summer Tour",
        src: tourDubai,
        country: "Dubai, UAE",
        price: "$2,850",
        durationtime: "5 days trip",
        durationdays: "8 Nov - 12 Nov 2024",
        locationIcon: destination,
        calendarIcon: HomeCalendar, 
        clockIcon: clock
        
    },
    {
        id: 2,
        name: "Kenya Safari Tour",
        src: tourKenya,
        country: "Kenya, Africa",
        price: "$1,020",
        durationtime: "3 days trip",
        durationdays: "25 Nov - 28 Nov 2024",
        locationIcon: destination,
        calendarIcon: HomeCalendar,
        clockIcon: clock
        
    },
    {
        id: 3,
        name: "Singapore Tour",
        src: tourSingapore,
        country: "Singapore",
        price: "$1,980",
        durationtime: "6 days trip",
        durationdays: "1 Nov - 6 Nov 2024",
        locationIcon: destination,
        calendarIcon: HomeCalendar,
        clockIcon: clock
        
    },
    {
        id: 4,
        name: "Kakum National Park",
        src: tourGhana,
        country: "Cape Coast, Ghana",
        price: "$560",
        durationtime: "1 day trip",
        durationdays: "15 Nov 2024",
        locationIcon: destination,
        calendarIcon: HomeCalendar,
        clockIcon: clock
        
    },
    {
        id: 5,
        name: "Egypt Tour",
        src: tourEgypt,
        country: "Egypt, Africa",
        price: "$1,400",
        durationtime: "3 days trip",
        durationdays: "25 Nov - 28 Nov 2025",
        locationIcon: destination,
        calendarIcon: HomeCalendar,
        clockIcon: clock
    },
    {
        id: 6,
        name: "Italy Tour",
        src: tourItaly,
        country: "Italy, Europe",
        price: "$2,860",
        durationtime: "4 days trip",
        durationdays: "1 Nov - 5 Nov 2025",
        locationIcon: destination,
        calendarIcon: HomeCalendar,
        clockIcon: clock       
    }
    
]
