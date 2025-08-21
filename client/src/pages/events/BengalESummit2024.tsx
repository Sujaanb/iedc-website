import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Trophy, Star, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
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
  prize: "Attractive prizes and recognition",
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

export default function BengalESummit2024() {
  return (
    <div>
      {/* Back Navigation */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/events">
            <div className="flex items-center text-iedc-blue hover:text-blue-700 transition-colors cursor-pointer">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Back to Events</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{eventDetails.name}</h1>
          <Badge className="bg-white text-black text-lg px-6 py-2 mb-6 font-semibold border-2 border-white">
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
              <Badge className="bg-white text-black px-4 py-2 text-sm font-semibold">
                {eventDetails.prize}
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Chief Guests */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center iedc-gray mb-12">Distinguished Chief Guests</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {chiefGuests.map((guest, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-iedc-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-white h-8 w-8" />
                  </div>
                  <h3 className="font-semibold iedc-gray text-sm">{guest}</h3>
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
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-gray-600 text-sm text-center">{image.caption}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center iedc-gray mb-12">Event Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-md">
              <CardContent className="p-8">
                <div className="text-4xl font-bold iedc-blue mb-2">500+</div>
                <h3 className="text-lg font-semibold iedc-gray mb-2">Attendees</h3>
                <p className="text-gray-600 text-sm">Entrepreneurs, students, and industry professionals</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-md">
              <CardContent className="p-8">
                <div className="text-4xl font-bold iedc-blue mb-2">50+</div>
                <h3 className="text-lg font-semibold iedc-gray mb-2">Startup Pitches</h3>
                <p className="text-gray-600 text-sm">Innovative ideas presented in Investopia</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-md">
              <CardContent className="p-8">
                <div className="text-4xl font-bold iedc-blue mb-2">15+</div>
                <h3 className="text-lg font-semibold iedc-gray mb-2">Industry Experts</h3>
                <p className="text-gray-600 text-sm">Mentors, investors, and thought leaders</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}