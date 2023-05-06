import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const events = [
  {
    id: 1,
    title: "Event 1",
    description: "This is the first event.",
  },
  {
    id: 2,
    title: "Event 2",
    description: "This is the second event.",
  },
  {
    id: 3,
    title: "Event 3",
    description: "This is the third event.",
  },
  {
    id: 4,
    title: "Event 4",
    description: "This is the fourth event.",
  },
  {
    id: 5,
    title: "Event 5",
    description: "This is the fifth event.",
  },
  {
    id: 6,
    title: "Event 6",
    description: "This is the sixth event.",
  },
  {
    id: 7,
    title: "Event 7",
    description: "This is the seventh event.",
  },
];

const EventCard = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="p-4 border rounded-md">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">{event.title}</h3>
        <button onClick={toggleDetails}>
          {showDetails ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
      </div>
      {showDetails && <p className="mt-4">{event.description}</p>}
    </div>
  );
};

const EventsPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-medium mb-8">Upcoming Events in Ottawa</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <a href={`/event/${event.id}`} key={event.id}>
            <EventCard event={event} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
