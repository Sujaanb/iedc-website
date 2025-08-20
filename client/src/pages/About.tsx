import { Card, CardContent } from "@/components/ui/card";
import { 
  Lightbulb, Settings, Rocket, Users, Eye, Target, 
  Globe, GraduationCap, Cpu, Handshake, Bot, Wifi, 
  Radio, Brain, Microchip, Signal 
} from "lucide-react";

const techAreas = [
  { icon: Bot, title: "Robotics", description: "Advanced robotics systems and automation" },
  { icon: Wifi, title: "IoT", description: "Internet of Things and connected devices" },
  { icon: Radio, title: "RF & Antenna", description: "Radio frequency and antenna technology" },
  { icon: Brain, title: "AI & Machine Learning", description: "Artificial Intelligence solutions and advanced ML algorithms" },
  { icon: Microchip, title: "VLSI", description: "Very Large Scale Integration design and implementation" },
  { icon: Signal, title: "Communications", description: "Modern communication systems and protocols" },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Us</h1>
          <p className="text-xl mb-4">Innovation and Entrepreneurship Development Center</p>
          <div className="inline-block bg-white bg-opacity-20 px-6 py-2 rounded-full mb-4">
            <span className="text-lg font-semibold">Year of Inception: 2023</span>
          </div>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* About Us Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-iedc-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 iedc-gray">Research</h3>
              <p className="text-gray-600">Cutting-edge research in emerging technologies</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-iedc-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 iedc-gray">Innovation</h3>
              <p className="text-gray-600">Product development and business solutions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-iedc-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 iedc-gray">Community</h3>
              <p className="text-gray-600">Fostering skilled student communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-iedc-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-iedc-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="text-white h-10 w-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold iedc-gray mb-6">Our Vision</h2>
          </div>
          
          <Card className="bg-white shadow-lg mb-12">
            <CardContent className="p-8 md:p-12">
              <blockquote className="text-lg md:text-xl leading-relaxed iedc-gray text-center">
                "To promote research, product development and business incubation ecosystem for the students – fostering a trained and skilled student community that will work in cutting edge technologies and build new-age businesses to solve technological challenges for making the earth a better place for all living objects."
              </blockquote>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 iedc-gray flex items-center">
                  <Globe className="iedc-blue mr-3 h-6 w-6" />
                  Global Impact
                </h3>
                <p className="text-gray-600">Creating solutions that benefit all living beings on Earth through innovative technology.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 iedc-gray flex items-center">
                  <GraduationCap className="iedc-blue mr-3 h-6 w-6" />
                  Student Development
                </h3>
                <p className="text-gray-600">Building a skilled community of students ready for tomorrow's challenges.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 iedc-gray flex items-center">
                  <Cpu className="iedc-blue mr-3 h-6 w-6" />
                  Cutting-edge Tech
                </h3>
                <p className="text-gray-600">Working with the latest technologies to solve real-world problems.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 iedc-gray flex items-center">
                  <Handshake className="iedc-blue mr-3 h-6 w-6" />
                  Business Ecosystem
                </h3>
                <p className="text-gray-600">Creating a supportive environment for new-age business development.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-iedc-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="text-white h-10 w-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold iedc-gray mb-6">Our Mission</h2>
          </div>
          
          <Card className="bg-iedc-light-gray shadow-lg mb-12">
            <CardContent className="p-8 md:p-12">
              <blockquote className="text-lg md:text-xl leading-relaxed iedc-gray text-center">
                "The IEDC ECE is committed to fostering a culture of research and product development among students. Its primary objective is to nurture a student community proficient in cutting-edge technologies through creativity and innovation. Under the mentorship of faculty members, students at the IEDC work in diverse fields including Robotics, IoT, RF & Microwave, Machine Learning, AI, Augmented Reality, Virtual Reality, and unmanned aerial and ground vehicles. The center strives for excellence by developing industry-ready products with significant real-world impact. Additionally, it focuses on cultivating entrepreneurship and tackling technological and business challenges faced by startups."
              </blockquote>
            </CardContent>
          </Card>

          <div className="mb-8">
            <h3 className="text-2xl font-bold iedc-gray text-center mb-8">Technology Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techAreas.map((area, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="iedc-blue text-2xl mb-4">
                      <area.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 iedc-gray">{area.title}</h3>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
