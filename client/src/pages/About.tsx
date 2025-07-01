import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Settings, Rocket, Users } from "lucide-react";

export default function About() {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold iedc-gray mb-6">About Us</h1>
            <div className="w-24 h-1 bg-iedc-blue mx-auto"></div>
          </div>
          
          <Card className="bg-iedc-light-gray shadow-lg mb-12">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-iedc-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="text-white h-8 w-8" />
                </div>
              </div>
              <blockquote className="text-lg md:text-xl leading-relaxed iedc-gray italic text-center">
                "To promote research, product development and business incubation ecosystem for the students – fostering a trained and skilled student community that will work in cutting edge technologies and build new-age businesses to solve technological challenges for making the earth a better place for all living objects."
              </blockquote>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    </div>
  );
}
