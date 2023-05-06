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
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sodales augue. Proin et lorem non mauris rutrum dignissim. Sed ut risus sed libero egestas rhoncus sit amet at urna.",
    date: "May 15, 2023",
    location: "New York, NY",
  },
  {
    id: 2,
    title: "Maecenas gravida nulla in erat dignissim",
    description:
      "Maecenas gravida nulla in erat dignissim, a molestie eros tristique. Fusce quis risus velit. Praesent et turpis id est euismod ultricies. Fusce vel velit et urna aliquam posuere.",
    date: "June 22, 2023",
    location: "San Francisco, CA",
  },
  {
    id: 3,
    title: "Vivamus volutpat elit in nisl commodo",
    description:
      "Vivamus volutpat elit in nisl commodo, ac vestibulum nulla gravida. Nullam eu nisi euismod, consequat quam nec, molestie ex. Morbi euismod lorem sit amet ipsum malesuada, vel dignissim risus mattis. ",
    date: "July 11, 2023",
    location: "Chicago, IL",
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
