import { Card, CardContent } from "@/components/ui/card";
import { Bus, GraduationCap, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Prof. Dr. Subhabrata Banerjee",
    role1: "Coordinator, IEDC IEM Salt Lake",
    role2: "Professor, ECE Department",
    email: "s.banerjee@iemcal.com",
    icon: Bus,
    bgColor: "bg-iedc-blue",
  },
  {
    name: "Prof. Dr. Indranil Maity",
    role1: "Assistant-Coordinator, IEDC IEM Salt Lake",
    role2: "Associate Professor, ECE Department",
    email: "i.maity@iemcal.com",
    icon: GraduationCap,
    bgColor: "bg-iedc-light-blue",
  },
];

export default function Team() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Team</h1>
          <p className="text-xl">Meet the leadership driving innovation at IEDC</p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 iedc-gray">
            Composition of the Centre
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-iedc-light-gray shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className={`w-24 h-24 ${member.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <member.icon className="text-white h-12 w-12" />
                    </div>
                    <h3 className="text-2xl font-bold iedc-gray mb-2">{member.name}</h3>
                    <div className="iedc-blue font-semibold mb-4">
                      <div>{member.role1}</div>
                      <div>{member.role2}</div>
                    </div>
                    <div className="flex items-center justify-center text-gray-600">
                      <Mail className="mr-2 h-4 w-4" />
                      <span className="text-sm">{member.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 text-center">
            <Card className="bg-iedc-blue text-white max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Faculty Mentorship</h3>
                <p className="text-lg leading-relaxed">
                  Our experienced faculty members provide dedicated mentorship to students, guiding them through cutting-edge research and innovation projects across multiple technology domains.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
