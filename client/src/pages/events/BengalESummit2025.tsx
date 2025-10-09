import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy, Lightbulb, Target, Rocket, Brain, ExternalLink } from "lucide-react";
import img1 from "@assets/bengal_e_summit_2025_1.jpg";
import img2 from "@assets/bengal_e_summit_2025_2.jpg";
import img3 from "@assets/bengal_e_summit_2025_3.jpg";
import img4 from "@assets/bengal_e_summit_2025_4.jpg";
import img5 from "@assets/bengal_e_summit_2025_5.jpg";
import img6 from "@assets/bengal_e_summit_2025_6.jpg";
import img7 from "@assets/bengal_e_summit_2025_7.jpg";

const events = [
  {
    name: "Inauguration",
    image: img1,
    description: "Grand opening ceremony of Bengal E-Summit 2025, setting the stage for innovation and entrepreneurship.",
    icon: Rocket,
  },
  {
    name: "Investopia",
    image: img2,
    description: "The flagship event where aspiring entrepreneurs pitch their startup ideas to industry experts and investors.",
    icon: Target,
  },
  {
    name: "Startup Expo",
    image: img3,
    description: "Showcase of innovative startup prototypes and business models from across the region.",
    icon: Lightbulb,
  },
  {
    name: "Pitch Perfect",
    image: img4,
    description: "A competitive pitching event where participants present their business ideas to win funding and mentorship.",
    icon: Trophy,
  },
  {
    name: "This is Buziness",
    image: img5,
    description: "An engaging business simulation and strategy competition testing entrepreneurial acumen.",
    icon: Users,
  },
  {
    name: "Mind Master",
    image: img6,
    description: "A challenging quiz competition testing knowledge of business, technology, and current affairs.",
    icon: Brain,
  },
  {
    name: "CHATJPG",
    image: img7,
    description: "An innovative AI-powered event exploring the intersection of technology and entrepreneurship.",
    icon: Rocket,
  },
];

export default function BengalESummit2025() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-iedc-blue via-iedc-light-blue to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white text-blue-600 px-6 py-2 text-lg">
            Flagship Event 2025
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Bengal E-Summit 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            West Bengal's Premier Entrepreneurship and Innovation Summit
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Institute of Engineering & Management, Kolkata</span>
            </div>
          </div>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About the Summit</h2>
            <div className="w-20 h-1 bg-iedc-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bengal E-Summit 2025 is a premier platform bringing together aspiring entrepreneurs,
              industry leaders, investors, and innovators from across the region. The summit features
              a diverse range of competitions, workshops, and networking opportunities designed to
              foster innovation and entrepreneurial spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="border-t-4 border-iedc-blue">
              <CardContent className="p-6 text-center">
                <Lightbulb className="w-12 h-12 text-iedc-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Showcase cutting-edge ideas and transformative solutions to real-world problems
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-purple-600">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Networking</h3>
                <p className="text-gray-600">
                  Connect with industry experts, mentors, and fellow entrepreneurs
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-iedc-light-blue">
              <CardContent className="p-6 text-center">
                <Trophy className="w-12 h-12 text-iedc-light-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Competition</h3>
                <p className="text-gray-600">
                  Compete for prizes, funding opportunities, and recognition
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Events & Competitions</h2>
            <div className="w-20 h-1 bg-iedc-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive lineup of events designed to challenge, inspire, and empower the next generation of entrepreneurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-6 h-6 text-white" />
                        <h3 className="text-2xl font-bold text-white">{event.name}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600">{event.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of the Innovation Revolution
          </h2>
          <p className="text-xl mb-8">
            Join us at Bengal E-Summit 2025 and take your entrepreneurial journey to the next level
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.bengalesummit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-100 hover:text-blue-700 transition-colors"
            >
              Visit Official Website
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
