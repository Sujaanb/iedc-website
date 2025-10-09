import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const eventsByYear = {
  2024: [
    {
      id: "bengal-e-summit-2024",
      name: "Bengal E-Summit 2024",
      edition: "First Edition",
      date: "July 27–28, 2024",
      venue: "IEM Gurukul Campus",
      participants: "Over 500 attendees",
      description: "A vibrant platform for knowledge sharing, networking, and investment opportunities featuring the flagship Investopia competition.",
      status: "completed",
      category: "Summit"
    },
    {
      id: "tech-innovation-workshop-2024",
      name: "Tech Innovation Workshop",
      edition: "Annual Workshop",
      date: "September 15, 2024",
      venue: "IEM Salt Lake Campus",
      participants: "150+ students",
      description: "Hands-on workshop on emerging technologies including AI, ML, and IoT for students and faculty.",
      status: "completed",
      category: "Workshop"
    },
    {
      id: "startup-pitch-competition-2024",
      name: "Startup Pitch Competition",
      edition: "Second Edition",
      date: "November 20, 2024",
      venue: "IEDC Auditorium",
      participants: "80+ entrepreneurs",
      description: "Platform for early-stage startups to pitch their ideas to investors and industry experts.",
      status: "completed",
      category: "Competition"
    }
  ],
  2025: [
    {
      id: "bengal-e-summit-2025",
      name: "Bengal E-Summit 2025",
      edition: "Second Edition",
      date: "July 2025 (TBA)",
      venue: "IEM Gurukul Campus",
      participants: "Expected 800+ attendees",
      description: "Expanded edition focusing on sustainable innovation and green technology entrepreneurship.",
      status: "upcoming",
      category: "Summit"
    },
    {
      id: "robotics-symposium-2025",
      name: "International Robotics Symposium",
      edition: "Inaugural Edition",
      date: "March 2025 (TBA)",
      venue: "IEM Salt Lake Campus",
      participants: "Expected 200+ participants",
      description: "International symposium on advanced robotics, automation, and AI applications.",
      status: "upcoming",
      category: "Symposium"
    }
  ]
};

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'summit': return 'bg-iedc-blue';
    case 'workshop': return 'bg-green-600';
    case 'competition': return 'bg-purple-600';
    case 'symposium': return 'bg-orange-600';
    default: return 'bg-gray-600';
  }
};

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'completed': return 'bg-green-100 text-green-800 border-green-200';
    case 'upcoming': return 'bg-blue-100 text-blue-800 border-blue-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export default function EventsOverview() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Events</h1>
          <p className="text-xl mb-8">
            Fostering innovation, entrepreneurship, and collaboration through impactful events
          </p>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Events by Year */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(eventsByYear)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, events]) => (
              <div key={year} className="mb-16">
                <div className="flex items-center mb-8">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <div className="px-6">
                    <h2 className="text-3xl font-bold iedc-gray">{year}</h2>
                  </div>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {events.map((event) => (
                    <Card key={event.id} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <Badge className={`${getCategoryColor(event.category)} text-white text-xs`}>
                            {event.category}
                          </Badge>
                          <Badge className={`${getStatusColor(event.status)} text-xs border`}>
                            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-bold iedc-gray mb-2">{event.name}</h3>
                        <p className="text-sm text-gray-500 mb-3">{event.edition}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 mr-2 iedc-blue" />
                            {event.date}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2 iedc-blue" />
                            {event.venue}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="h-4 w-4 mr-2 iedc-blue" />
                            {event.participants}
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {event.description}
                        </p>
                        
                        {event.status === 'completed' && (
                          <Link href={`/events/${event.id}`}>
                            <div className="flex items-center justify-between p-3 bg-iedc-light-gray rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                              <span className="text-sm font-medium iedc-gray">View Event Details</span>
                              <ArrowRight className="h-4 w-4 iedc-blue" />
                            </div>
                          </Link>
                        )}
                        
                        {event.status === 'upcoming' && event.id === 'bengal-e-summit-2025' && (
                          <Link href={`/events/${event.id}`}>
                            <div className="flex items-center justify-between p-3 bg-iedc-light-gray rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                              <span className="text-sm font-medium iedc-gray">View Event Details</span>
                              <ArrowRight className="h-4 w-4 iedc-blue" />
                            </div>
                          </Link>
                        )}

                        {event.status === 'upcoming' && event.id !== 'bengal-e-summit-2025' && (
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <span className="text-sm font-medium text-blue-800">More details coming soon</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-iedc-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold iedc-gray mb-6">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Don't miss out on our upcoming events and opportunities. Follow us for the latest updates 
            on workshops, competitions, summits, and networking events.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-iedc-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold iedc-gray mb-2">Regular Events</h3>
              <p className="text-gray-600 text-sm">Monthly workshops and quarterly competitions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-iedc-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold iedc-gray mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Connect with fellow entrepreneurs and innovators</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-iedc-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold iedc-gray mb-2">Multiple Venues</h3>
              <p className="text-gray-600 text-sm">Events across our campuses and partner locations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}