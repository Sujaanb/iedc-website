import { Card, CardContent } from "@/components/ui/card";
import { Target, Bot, Wifi, Radio, Brain, Cpu, Glasses } from "lucide-react";

const techAreas = [
  { icon: Bot, title: "Robotics", description: "Advanced robotics systems and automation" },
  { icon: Wifi, title: "IoT", description: "Internet of Things and connected devices" },
  { icon: Radio, title: "RF & Microwave", description: "Radio frequency and microwave technology" },
  { icon: Brain, title: "Machine Learning", description: "Advanced ML algorithms and applications" },
  { icon: Cpu, title: "AI", description: "Artificial Intelligence solutions" },
  { icon: Glasses, title: "AR/VR", description: "Augmented and Virtual Reality systems" },
];

export default function Mission() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-br from-iedc-light-blue to-iedc-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-12"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-iedc-light-gray shadow-lg mb-12">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-iedc-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="text-white h-10 w-10" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold iedc-gray mb-6">Mission Statement</h2>
              </div>
              <blockquote className="text-lg md:text-xl leading-relaxed iedc-gray text-center">
                "The IEDC at IEM is committed to fostering a culture of research and product development among students. Its primary objective is to nurture a student community proficient in cutting-edge technologies through creativity and innovation. Under the mentorship of faculty members, students at the IEDC work in diverse fields including Robotics, IoT, RF & Microwave, Machine Learning, AI, Augmented Reality, Virtual Reality, and unmanned aerial and ground vehicles. The center strives to create an ecosystem that encourages entrepreneurship and innovation."
              </blockquote>
            </CardContent>
          </Card>

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
      </section>
    </div>
  );
}
