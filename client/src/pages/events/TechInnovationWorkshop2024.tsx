import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, ArrowLeft, BookOpen, Code, Lightbulb } from "lucide-react";
import { Link } from "wouter";

const eventDetails = {
  name: "Tech Innovation Workshop",
  edition: "Annual Workshop",
  date: "September 15, 2024",
  venue: "IEM Salt Lake Campus",
  timing: "9:00 AM – 4:00 PM",
  participants: "150+ students and faculty",
  duration: "Full Day Workshop",
};

const workshopModules = [
  {
    title: "AI & Machine Learning Fundamentals",
    duration: "2 hours",
    description: "Introduction to AI concepts, ML algorithms, and practical applications in real-world scenarios.",
    icon: Lightbulb,
  },
  {
    title: "IoT Systems Development",
    duration: "2 hours", 
    description: "Hands-on experience with IoT sensors, connectivity protocols, and building smart device networks.",
    icon: Code,
  },
  {
    title: "Innovation Methodology",
    duration: "1.5 hours",
    description: "Design thinking, prototyping techniques, and innovation frameworks for technology development.",
    icon: BookOpen,
  },
];

const outcomes = [
  "Practical knowledge of emerging technologies",
  "Hands-on experience with AI/ML tools",
  "Understanding of IoT ecosystem and development",
  "Innovation methodologies and design thinking",
  "Certificate of participation",
  "Access to workshop resources and materials"
];

export default function TechInnovationWorkshop2024() {
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{eventDetails.name}</h1>
          <Badge className="bg-white text-green-800 text-lg px-6 py-2 mb-6 font-semibold border-2 border-white">
            {eventDetails.edition}
          </Badge>
          <p className="text-xl mb-8">
            Hands-on learning experience in emerging technologies for students and faculty
          </p>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold iedc-gray mb-6">Workshop Overview</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Tech Innovation Workshop 2024 was designed to provide hands-on experience with cutting-edge 
                technologies including Artificial Intelligence, Machine Learning, and Internet of Things (IoT). 
                The workshop aimed to bridge the gap between theoretical knowledge and practical application.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Participants gained valuable insights into innovation methodologies, learned to work with 
                modern development tools, and understood how to apply these technologies to solve real-world problems.
              </p>
            </div>
            
            {/* Event Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="shadow-md">
                <CardContent className="p-6 text-center">
                  <Calendar className="text-green-600 h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Date</h3>
                  <p className="text-gray-600">{eventDetails.date}</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6 text-center">
                  <MapPin className="text-green-600 h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Venue</h3>
                  <p className="text-gray-600">{eventDetails.venue}</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6 text-center">
                  <Clock className="text-green-600 h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Duration</h3>
                  <p className="text-gray-600">{eventDetails.duration}</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6 text-center">
                  <Users className="text-green-600 h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Participants</h3>
                  <p className="text-gray-600">{eventDetails.participants}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Modules */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center iedc-gray mb-12">Workshop Modules</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshopModules.map((module, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-600">
                <CardContent className="p-6">
                  <module.icon className="text-green-600 h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold iedc-gray mb-2">{module.title}</h3>
                  <Badge className="bg-green-100 text-green-800 text-xs mb-3">
                    {module.duration}
                  </Badge>
                  <p className="text-gray-600">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold iedc-gray mb-8">Learning Outcomes</h2>
              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Workshop Highlights</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <Code className="h-5 w-5 text-green-600 mr-3" />
                      Hands-on coding sessions
                    </li>
                    <li className="flex items-center">
                      <BookOpen className="h-5 w-5 text-green-600 mr-3" />
                      Interactive learning modules
                    </li>
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-green-600 mr-3" />
                      Collaborative project work
                    </li>
                    <li className="flex items-center">
                      <Lightbulb className="h-5 w-5 text-green-600 mr-3" />
                      Innovation challenges
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact and Statistics */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center iedc-gray mb-12">Workshop Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center shadow-md">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
                <h3 className="text-lg font-semibold iedc-gray mb-2">Participants</h3>
                <p className="text-gray-600 text-sm">Students and faculty members</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-md">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-green-600 mb-2">3</div>
                <h3 className="text-lg font-semibold iedc-gray mb-2">Technology Tracks</h3>
                <p className="text-gray-600 text-sm">AI/ML, IoT, and Innovation</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-md">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-green-600 mb-2">8</div>
                <h3 className="text-lg font-semibold iedc-gray mb-2">Expert Facilitators</h3>
                <p className="text-gray-600 text-sm">Industry professionals and faculty</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-md">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <h3 className="text-lg font-semibold iedc-gray mb-2">Completion Rate</h3>
                <p className="text-gray-600 text-sm">All participants received certificates</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}