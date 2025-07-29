import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Trophy, Star } from "lucide-react";
import event1 from "@assets/Screenshot 2025-07-29 120336_1753770916701.png";
import event2 from "@assets/Screenshot 2025-07-29 120355_1753770916701.png";
import event3 from "@assets/Screenshot 2025-07-29 120410_1753770916701.png";
import event4 from "@assets/Screenshot 2025-07-29 120440_1753770916702.png";

const eventDetails = {
  name: "Bengal E-Summit 2024",
  edition: "First Edition",
  date: "July 27–28, 2024",
  venue: "IEM Gurukul Campus",
  timing: "10:00 AM – 5:00 PM",
  participants: "Over 500 attendees",
  prize: "₹1,00,000",
};

const chiefGuests = [
  "Mr. Naval Kishor Arora",
  "Ms. Pragya Jhunjhunwala",
  "Mrs. Mohuya Hom Choudhury",
  "Mr. Arindom Sil",
];

const highlights = [
  {
    title: "Investopia Competition",
    description: "A Shark Tank-style competition for startups and businesses where winners could secure funding and prizes.",
    icon: Trophy,
  },
  {
    title: "Knowledge Sharing",
    description: "Platform for sharing innovative ideas and technological advancements across various sectors.",
    icon: Star,
  },
  {
    title: "Networking Opportunities",
    description: "Connect entrepreneurs, investors, and industry leaders to build a thriving ecosystem.",
    icon: Users,
  },
];

const eventImages = [
  {
    src: event1,
    alt: "Award ceremony with chief guests and winners",
    caption: "Recognition ceremony with distinguished guests"
  },
  {
    src: event2,
    alt: "Panel discussion at Bengal E-Summit 2024",
    caption: "Expert panel discussion on entrepreneurship"
  },
  {
    src: event3,
    alt: "Group photo with event organizers and speakers",
    caption: "Event organizers and industry speakers"
  },
  {
    src: event4,
    alt: "Business model presentation during Investopia",
    caption: "Startup pitch presentation at Investopia competition"
  },
];

export default function Events() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{eventDetails.name}</h1>
          <Badge className="bg-white text-iedc-blue text-lg px-6 py-2 mb-6 font-semibold">
            {eventDetails.edition}
          </Badge>
          <p className="text-xl mb-8">
            Fostering innovation, entrepreneurship, and collaboration in West Bengal
          </p>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold iedc-gray mb-6">Event Overview</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Bengal E-Summit 2024 aimed to create a vibrant platform for knowledge sharing, 
                networking, and investment opportunities. Its flagship event, Investopia, encouraged 
                participants to pitch innovative ideas to potential investors, driving economic growth 
                and technological advancement in the region.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The summit emphasized collaboration across sectors to address challenges and unlock 
                opportunities in entrepreneurship, creating a thriving ecosystem for innovation in West Bengal.
              </p>
            </div>
            
            {/* Event Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="shadow-md">
                <CardContent className="p-6 text-center">
                  <Calendar className="iedc-blue h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Date</h3>
                  <p className="text-gray-600">{eventDetails.date}</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6 text-center">
                  <MapPin className="iedc-blue h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Venue</h3>
                  <p className="text-gray-600">{eventDetails.venue}</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6 text-center">
                  <Clock className="iedc-blue h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Timing</h3>
                  <p className="text-gray-600">{eventDetails.timing}</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6 text-center">
                  <Users className="iedc-blue h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Participants</h3>
                  <p className="text-gray-600">{eventDetails.participants}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-iedc-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center iedc-gray mb-12">Key Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-md border-l-4 border-iedc-blue">
                <CardContent className="p-6">
                  <highlight.icon className="iedc-blue h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold iedc-gray mb-3">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Investopia Special Highlight */}
          <Card className="bg-iedc-blue text-white shadow-lg">
            <CardContent className="p-8 text-center">
              <Trophy className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Investopia Competition</h3>
              <p className="text-lg mb-4">
                Our flagship Shark Tank-style competition where innovative startups and businesses 
                competed for funding and recognition.
              </p>
              <Badge className="bg-white text-iedc-blue text-xl px-6 py-3 font-bold">
                Prize Pool: {eventDetails.prize}
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Chief Guests */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center iedc-gray mb-12">Distinguished Guests</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chiefGuests.map((guest, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-iedc-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="text-white h-8 w-8" />
                  </div>
                  <h3 className="font-semibold iedc-gray">{guest}</h3>
                  <p className="text-sm text-gray-600 mt-1">Chief Guest</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-16 bg-iedc-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center iedc-gray mb-12">Event Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventImages.map((image, index) => (
              <Card key={index} className="shadow-md overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-gray-600 text-sm">{image.caption}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-iedc-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Next Event</h2>
          <p className="text-xl mb-8">
            Stay connected with IEDC IEM Salt Lake for upcoming events, workshops, and opportunities 
            to be part of our thriving entrepreneurial community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge className="bg-white text-iedc-blue text-lg px-6 py-3 font-semibold">
              Follow our updates for Bengal E-Summit 2025
            </Badge>
          </div>
        </div>
      </section>
    </div>
  );
}