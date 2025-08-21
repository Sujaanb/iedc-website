import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, ArrowLeft, Trophy, Target, Zap } from "lucide-react";
import { Link } from "wouter";

const eventDetails = {
  name: "Startup Pitch Competition",
  edition: "Second Edition",
  date: "November 20, 2024",
  venue: "IEDC Auditorium",
  timing: "10:00 AM – 6:00 PM",
  participants: "80+ entrepreneurs",
  categories: "5 different categories",
};

const competitionCategories = [
  {
    title: "EdTech Solutions",
    description: "Educational technology innovations improving learning experiences and accessibility.",
    icon: Target,
    participants: "15 teams"
  },
  {
    title: "HealthTech & Biomedical",
    description: "Healthcare innovations, medical devices, and biotechnology solutions.",
    icon: Zap,
    participants: "18 teams"
  },
  {
    title: "FinTech & Blockchain",
    description: "Financial technology solutions and blockchain-based applications.",
    icon: Trophy,
    participants: "12 teams"
  },
  {
    title: "Sustainable Technology",
    description: "Green technology, renewable energy, and environmental solutions.",
    icon: Target,
    participants: "20 teams"
  },
  {
    title: "AI & Automation",
    description: "Artificial intelligence applications and automation technologies.",
    icon: Zap,
    participants: "16 teams"
  }
];

const judges = [
  {
    name: "Ms. Priya Sharma",
    role: "Venture Capital Partner",
    company: "TechVentures India"
  },
  {
    name: "Mr. Rajesh Kumar",
    role: "Serial Entrepreneur",
    company: "Founder, InnovateTech"
  },
  {
    name: "Dr. Anita Verma",
    role: "Technology Director",
    company: "Digital Solutions Corp"
  },
  {
    name: "Mr. Sameer Jain",
    role: "Angel Investor",
    company: "Startup Accelerator"
  }
];

const awards = [
  {
    category: "Overall Winner",
    prize: "₹50,000 + Incubation Support",
    description: "Best overall startup with highest potential"
  },
  {
    category: "Category Winners",
    prize: "₹25,000 each",
    description: "Best startup in each of the 5 categories"
  },
  {
    category: "People's Choice",
    prize: "₹15,000",
    description: "Audience favorite startup"
  },
  {
    category: "Most Innovative",
    prize: "₹20,000",
    description: "Most innovative technology or approach"
  }
];

export default function StartupPitchCompetition2024() {
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{eventDetails.name}</h1>
          <Badge className="bg-white text-purple-800 text-lg px-6 py-2 mb-6 font-semibold border-2 border-white">
            {eventDetails.edition}
          </Badge>
          <p className="text-xl mb-8">
            Platform for early-stage startups to showcase innovative ideas to investors and industry experts
          </p>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold iedc-gray mb-6">Competition Overview</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Startup Pitch Competition 2024 brought together early-stage entrepreneurs, seasoned 
                investors, and industry experts in a dynamic environment. Startups competed across five 
                distinct categories, presenting their innovative solutions to a panel of experienced judges.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The competition focused on identifying scalable business models, innovative technology 
                solutions, and teams with strong execution potential. Winners received funding support, 
                mentorship opportunities, and access to our incubation program.
              </p>
            </div>
            
            {/* Event Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="shadow-md">
                <CardContent className="p-6 text-center">
                  <Calendar className="text-purple-600 h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Date</h3>
                  <p className="text-gray-600">{eventDetails.date}</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6 text-center">
                  <MapPin className="text-purple-600 h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Venue</h3>
                  <p className="text-gray-600">{eventDetails.venue}</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6 text-center">
                  <Clock className="text-purple-600 h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Duration</h3>
                  <p className="text-gray-600">Full Day Event</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6 text-center">
                  <Users className="text-purple-600 h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Participants</h3>
                  <p className="text-gray-600">{eventDetails.participants}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center iedc-gray mb-12">Competition Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitionCategories.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-600">
                <CardContent className="p-6">
                  <category.icon className="text-purple-600 h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold iedc-gray mb-2">{category.title}</h3>
                  <Badge className="bg-purple-100 text-purple-800 text-xs mb-3">
                    {category.participants}
                  </Badge>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Judging Panel */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center iedc-gray mb-12">Expert Judging Panel</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {judges.map((judge, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-white h-8 w-8" />
                  </div>
                  <h3 className="font-bold iedc-gray text-sm mb-1">{judge.name}</h3>
                  <p className="text-purple-600 text-xs font-medium mb-1">{judge.role}</p>
                  <p className="text-gray-500 text-xs">{judge.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center iedc-gray mb-12">Awards & Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="shadow-lg border-l-4 border-purple-600">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Trophy className="text-purple-600 h-8 w-8 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold iedc-gray">{award.category}</h3>
                      <Badge className="bg-purple-600 text-white text-sm mt-1">
                        {award.prize}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center iedc-gray mb-12">Competition Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center shadow-md">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-purple-600 mb-2">81</div>
                <h3 className="text-lg font-semibold iedc-gray mb-2">Startup Teams</h3>
                <p className="text-gray-600 text-sm">Across 5 categories</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-md">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-purple-600 mb-2">₹1.6L</div>
                <h3 className="text-lg font-semibold iedc-gray mb-2">Total Prize Money</h3>
                <p className="text-gray-600 text-sm">Distributed among winners</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-md">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-purple-600 mb-2">12</div>
                <h3 className="text-lg font-semibold iedc-gray mb-2">Expert Judges</h3>
                <p className="text-gray-600 text-sm">Industry veterans and investors</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-md">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-purple-600 mb-2">6</div>
                <h3 className="text-lg font-semibold iedc-gray mb-2">Incubation Offers</h3>
                <p className="text-gray-600 text-sm">Startups selected for incubation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}