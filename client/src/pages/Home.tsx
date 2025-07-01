import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Info, Eye, Target, Users, Rocket, Images, Mail, TrendingUp } from "lucide-react";

const quickLinks = [
  {
    icon: Info,
    title: "About Us",
    description: "Learn about our mission and objectives",
    path: "/about",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "Our vision for the future",
    path: "/vision",
  },
  {
    icon: Target,
    title: "Mission",
    description: "Our commitment to excellence",
    path: "/mission",
  },
  {
    icon: Users,
    title: "Team",
    description: "Meet our leadership team",
    path: "/team",
  },
  {
    icon: Rocket,
    title: "Start-ups",
    description: "Companies we've incubated",
    path: "/startups",
  },
  {
    icon: Images,
    title: "Gallery",
    description: "Our activities and events",
    path: "/gallery",
  },
  {
    icon: Mail,
    title: "Contact",
    description: "Get in touch with us",
    path: "/contact",
  },
  {
    icon: TrendingUp,
    title: "Innovation Hub",
    description: "Cutting-edge technology development",
    path: "/about",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Innovation and Entrepreneurship Development Center
            </h1>
            <p className="text-xl md:text-2xl mb-4">IEM Salt Lake</p>
            <div className="inline-block bg-white bg-opacity-20 px-6 py-2 rounded-full">
              <span className="text-lg font-semibold">Year of Inception: 2014</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 iedc-gray">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link key={index} href={link.path}>
                <Card className="bg-iedc-light-gray hover:shadow-lg transition-shadow cursor-pointer group h-full">
                  <CardContent className="p-6">
                    <div className="iedc-blue text-3xl mb-4 group-hover:scale-110 transition-transform">
                      <link.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 iedc-gray">{link.title}</h3>
                    <p className="text-gray-600">{link.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-iedc-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-lg">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">8</div>
              <div className="text-lg">Start-ups Incubated</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-lg">Students Mentored</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
