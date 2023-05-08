import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const EventCard = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="border-b border-gray-300 mb-4 pb-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-bold text-lg">{event.title}</h2>
        <button
          className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
      </div>
      {showDetails && (
        <>
          <p className="mb-2">{event.description}</p>
          <p className="text-gray-600 text-sm">
            Date: {event.date}, Location: {event.location}
          </p>
        </>
      )}
    </div>
  );
};

const events = [
  {
    id: 1,
    title: "Summer Festival in Ottawa",
    description:
      "Join us for the biggest summer festival in Ottawa! Enjoy a variety of live music performances, delicious food vendors, and exciting activities for the whole family. Don't miss out on the fun!",
    date: "August 6-8, 2023",
    location: "Ottawa, ON",
  },
  {
    id: 2,
    title: "Saskatchewan Agriculture Fair",
    description:
      "Experience the best of Saskatchewan's agriculture at our annual fair! Enjoy farm-to-table food vendors, live music performances, and a wide range of agricultural exhibits and activities. Bring the whole family for a fun-filled day!",
    date: "September 16-18, 2023",
    location: "Saskatchewan, SK",
  },
  {
    id: 3,
    title: "Vancouver Film Festival",
    description:
      "Join us for the 35th annual Vancouver Film Festival! Discover the latest and greatest in independent cinema from around the world, attend exclusive screenings and events, and participate in Q&A sessions with filmmakers and industry professionals.",
    date: "October 5-12, 2023",
    location: "Vancouver, BC",
  },
];

const EventsPage = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsPage;
