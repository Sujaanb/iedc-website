import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const startups = [
  {
    id: 1,
    name: "Consultalk",
    objective: "Online mock test series for WBJEE aspirants",
    license: "Trade License 006553",
  },
  {
    id: 2,
    name: "Rise & Shine Tech Library",
    objective: "Online books platform with AI-based recommendations",
    license: "Trade License 006554",
  },
  {
    id: 3,
    name: "ChemGear",
    objective: "Precision laboratory equipment for scientific research",
    license: "Trade License 006555",
  },
  {
    id: 4,
    name: "Storyline Stitches",
    objective: "Online reselling of old books",
    license: "Trade License 006556",
  },
  {
    id: 5,
    name: "PixelCraft Creations",
    objective: "Creative graphic design solutions",
    license: "Trade License 006575",
  },
  {
    id: 6,
    name: "Celestial Courier",
    objective: "Drone delivery services for food and groceries",
    license: "Trade License 006558",
  },
  {
    id: 7,
    name: "Use For Your Need (U-FYN)",
    objective: "Interactive online platform for doctor-patient appointments and health check-ups",
    license: "Trade License 006578",
  },
  {
    id: 8,
    name: "Onrique",
    objective: "Light-weight jewelry design and manufacturing",
    license: "Trade License 006576",
  },
];

export default function Startups() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-iedc-light-blue to-iedc-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Start-ups Incubated</h1>
          <p className="text-xl">Innovative companies we've nurtured from concept to reality</p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full bg-white">
              <thead className="bg-iedc-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Sl. No.
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Company Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Objective
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Status (License)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {startups.map((startup) => (
                  <tr key={startup.id} className="hover:bg-iedc-light-gray transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium iedc-gray">
                      {startup.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold iedc-blue">
                      {startup.name}
                    </td>
                    <td className="px-6 py-4 text-sm iedc-gray">{startup.objective}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                      {startup.license}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {startups.map((startup) => (
              <Card key={startup.id} className="border-l-4 border-iedc-blue shadow-md">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold iedc-blue">{startup.name}</h3>
                    <Badge className="bg-green-100 text-green-800 text-xs">
                      {startup.license.replace("Trade License ", "")}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{startup.objective}</p>
                  <div className="text-xs text-gray-500">Company #{startup.id}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
