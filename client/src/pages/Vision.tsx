import { Card, CardContent } from "@/components/ui/card";
import { Eye, Globe, GraduationCap, Cpu, Handshake } from "lucide-react";

export default function Vision() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-br from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Vision</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-12"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-iedc-light-gray shadow-lg mb-12">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-iedc-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="text-white h-10 w-10" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold iedc-gray mb-6">Vision Statement</h2>
              </div>
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
    </div>
  );
}
