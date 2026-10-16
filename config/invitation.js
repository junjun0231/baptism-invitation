// Edit everything about the invitation here.
// The child's name lives here once and is reused for the title, metadata and calendar.
const childName = "Oriane Dara";

export const invitation = {
  childName,
  // Opening line and title shown in the hero
  opening: "Join us to celebrate",
  title: `${childName}'s Baptism & 1st Birthday Party`,

  // ISO date with timezone offset (Philippines = +08:00)
  eventDate: "2026-11-28T11:00:00+08:00",
  timeZone: "Asia/Manila",

  ceremony: {
    label: "Baptism Ceremony",
    time: "At 11:00 AM",
    venue: "Antipolo Cathedral",
    address: "Antipolo City",
    mapQuery: "14.587615,121.176590",
  },

  reception: {
    label: "Reception",
    time: "At 12:00 PM",
    venue: "Bobis Residences",
    address: "5 Puting Bato, Solid Cement Road, Antipolo City",
    // Exact coordinates from the shared map pin (latitude,longitude)
    mapQuery: "14.5750045,121.2025059",
  },

  // Leave src empty to show the designed placeholder frame.
  // Add a URL (e.g. "/oriane.jpg" with the file in /public) to show a real photo.
  photo: {
    src: "/oriane-dara-picture.jpg",
    alt: childName,
  },

  sponsors: {
    heading: "Ninang & Ninong",
    ninong: {
      label: "Ninong",
      photo: "/ninong-list.jpg",
      names: [
        "Morson Martinico",
        "Hans Sta. Maria",
        "Albert Agustin",
        "Jonathan Condez",
        "Rowel Nachura",
        "Omar Nachura",
        "Mark Tubigon",
        "Rodenthor Aunlacion",
        "Renz Aganon",
        "Guillermo Diangco",
      ],
    },
    ninang: {
      label: "Ninang",
      photo: "/ninang-list.jpg",
      names: [
        "Fiscelle Ducians",
        "Aiza Cabague",
        "Chiana Boutillos",
        "Cecille Anne Coles",
        "Ocheelyn Nachura",
        "Jovy Bobis",
        "Jennalyn Correa",
        "Lilit Lindemann",
        "Chinnce Anne Banate",
      ],
    },
  },

  rsvpDeadline: "November 20, 2026",
  thankYou: "We can't wait to celebrate with you.",
  contact: "+63 900 000 0000",
};
