import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Building2, Calendar, Clock } from "lucide-react";

type SponsoredResearch = {
  title: string;
  projectLeaders: string;
  supportingAgency: string;
  duration: string;
  status: string;
};

type AcademicYearData = {
  year: string;
  projects: SponsoredResearch[];
};

const sponsoredResearchData: AcademicYearData[] = [
  {
    year: "July 2024 - June 2025",
    projects: [
      {
        title: "Next-Gen Smart Low Cost EV with Cutting-Edge Charging Technology",
        projectLeaders: "Prof. Rajib Ghosh (PI), Prof. Amit Kumar Das (Co-PI), Prof. Rintu Kumar Gayen (Co-PI), Prof. Mohidur Rahaman (Co-PI)",
        supportingAgency: "IEM",
        duration: "2025 to *",
        status: "Ongoing",
      },
      {
        title: "IoT-Driven Electric Bike with Smart Navigation and Predictive Maintenance",
        projectLeaders: "Prof. Amit Kumar Das (PI), Prof. Rajib Ghosh (Co-PI), Prof. Rintu Kumar Gayen (Co-PI), Prof. Mohidur Rahaman (Co-PI)",
        supportingAgency: "IEM",
        duration: "2025 to *",
        status: "Ongoing",
      },
      {
        title: "IoT-based Voice-Activated Smart Wheelchair for Patients with Physical Disability",
        projectLeaders: "Arindam Chakraborty, Arunava Mukhopadhyay, Samit Karmakar",
        supportingAgency: "IEMUEM Grant-in-Aid Projects",
        duration: "2024 to 2026",
        status: "ONGOING",
      },
      {
        title: "IOT Based Voice Activated Smart Wheelchair with Stair climbing Ability for Patients having Neurological Disorders",
        projectLeaders: "*",
        supportingAgency: "Institute of Engineering and Management, Grant in Aid scheme",
        duration: "2024 to 2026",
        status: "Ongoing",
      },
      {
        title: "Smart Safety Glasses for the Visually Combining: Integrating Object Detection, Sound Analysis and Speech Recognition",
        projectLeaders: "PI",
        supportingAgency: "IEM",
        duration: "2024 to 2026",
        status: "ongoing",
      },
      {
        title: "loT-Driven Electric Bike with Smart Navigation and Predictive Maintenance",
        projectLeaders: "PI",
        supportingAgency: "IEM",
        duration: "2025 to 2027",
        status: "ongoing",
      },
      {
        title: "Next-Gen Smart Low Cost EV with Cutting-Edge Charging Technology",
        projectLeaders: "Co-PI",
        supportingAgency: "IEM",
        duration: "2025 to 2027",
        status: "ongoing",
      },
      {
        title: "Wearable Antenna Design for Defense Application",
        projectLeaders: "Malay Gangopadhyaya, Ardhendu Kundu, Sayan Sarkar",
        supportingAgency: "*",
        duration: "2024 to 2026",
        status: "ongoing",
      },
      {
        title: "Reconfigurable Intelligent Surfaces (RIS) Using Metasurfaces for 5G, I0T and Smart Applications",
        projectLeaders: "Malay Gangopadhyaya, Ardhendu Kundu, Sayan Sarkar",
        supportingAgency: "*",
        duration: "2024 to 2026",
        status: "ongoing",
      },
      {
        title: "Design and Fabrication of Pico-Satellite",
        projectLeaders: "Dr. Murari Shaw",
        supportingAgency: "*",
        duration: "2025 to 2026",
        status: "*",
      },
      {
        title: "Reconfigurable lntelligent Surfaces for next generation wireless communication",
        projectLeaders: "PI",
        supportingAgency: "IEM GRANT-IN AID PROJECT FUND",
        duration: "Sep-24 to 2026",
        status: "N/A",
      },
      {
        title: "Smart Safety Glasses for the Visually Combining: lntegrating Object Detection, Sound Analysis and Speech Recognition",
        projectLeaders: "Co PI",
        supportingAgency: "IEM GRANT-IN AID PROJECT FUND",
        duration: "Sep-24 to 2026",
        status: "N/A",
      },
      {
        title: "Development of a smartphone application for remote screening and monitoring of gait and balance issues in the elderly (REGAIn)",
        projectLeaders: "Co-PI",
        supportingAgency: "WBDST research project (memo no. 296(Sanc.)/STBT 11012(19)/11/2024-ST SEC)",
        duration: "2024 to 2027",
        status: "*",
      },
      {
        title: "IoT-Driven Electric Bike with Smart Navigation and Predictive Maintenance",
        projectLeaders: "Co-PI",
        supportingAgency: "IEM",
        duration: "2025 to 2027",
        status: "*",
      },
      {
        title: "Next-Gen Smart Low Cost EV with Cutting-Edge Charging Technology",
        projectLeaders: "Co-PI",
        supportingAgency: "IEM",
        duration: "2025 to 2027",
        status: "*",
      },
      {
        title: "Wearable Antenna Design for Defense Application",
        projectLeaders: "Malay Gangopadhyaya, Ardhendu Kundu, Sayan Sarkar",
        supportingAgency: "IEM",
        duration: "2024 to 2026",
        status: "ongoing",
      },
      {
        title: "Reconfigurable Intelligent Surfaces (RIS) Using Metasurfaces for 5G, I0T and Smart Applications",
        projectLeaders: "Malay Gangopadhyaya, Ardhendu Kundu, Sayan Sarkar",
        supportingAgency: "IEM",
        duration: "2024 to 2026",
        status: "ongoing",
      },
      {
        title: "Design and Fabrication of Low-Cost Portable Microwave Sensors for Food Adulteration Detection",
        projectLeaders: "Gobinda Sen, Ardhendu Kundu and Sayan Sarkar",
        supportingAgency: "IEM",
        duration: "2024 to 2026",
        status: "*",
      },
      {
        title: "Design and Fabrication of Microwave Biosensors on Unconventional 3D Printed Substrate for Medical Diagnosis",
        projectLeaders: "Srijita Chakraborty, Malay Gangopadhyay and Ardhendu Kundu",
        supportingAgency: "IEM",
        duration: "2024 to 2026",
        status: "*",
      },
      {
        title: "Design and Development of a Low-Cost Precise Electrometer for l-V Characterization of Carbon Thin Films",
        projectLeaders: "Prof. Samit Kamarkar (Pl) Dr. Mili Sarkar (CO-P|), Prof. Dr. G.S. Taki(CO-Pl)",
        supportingAgency: "IEM-UEM R&D Grant-in-Aid",
        duration: "2024 to Ongoing",
        status: "Ongoing",
      },
      {
        title: "SmartAttendance System (Gen 2.0)",
        projectLeaders: "Dr. Mili Sarkar (Pl) Prof. Samit Karmakar (CO-PI)",
        supportingAgency: "IEM-UEM R&D Grant-in-Aid",
        duration: "2024 to Ongoing",
        status: "Ongoing",
      },
      {
        title: "IOT-Based Voice-Activated Smart Wheelchair Wth Stair-Climing Ability For Patients Having Neurological Disorders",
        projectLeaders: "Dr. Anindam Chakraborty (Pl) Prof. Anunava Mukhopadhyay (CO- Pl), Prof. Samit Karmakar (CO-P|)",
        supportingAgency: "IEM-UEM R&D Grant-in-Aid",
        duration: "2024 to Ongoing",
        status: "Ongoing",
      },
      {
        title: "Development of an Ai-based Stock Market Analysis Application lntegrating Mood Monitoring, Geopolitics and lndustry-specific Factors",
        projectLeaders: "Prof. Soumik Kumar Kundu",
        supportingAgency: "IEM-UEM R&D Grant-in-Aid",
        duration: "2024 to Ongoing",
        status: "Ongoing",
      },
      {
        title: "Al-based Smart Farming for Enhanced Agricultural Productivity and Sustainability",
        projectLeaders: "Prof. Soumik Kumar Kundu",
        supportingAgency: "IEM-UEM R&D Grant-in-Aid",
        duration: "2024 to Ongoing",
        status: "Ongoing",
      },
      {
        title: "Abot AI, focusing on the root cause analysis of mobility and infrastructure KPIs, working with real-time data, 5G call flow, and considering different use cases",
        projectLeaders: "Mentorship (joint collaboration between IEM Kolkata and Rebaca Technologies)",
        supportingAgency: "Rebaca Technologies Pvt. Ltd",
        duration: "2024 to Present",
        status: "MoU",
      },
      {
        title: "Deep Learning techniques for Predictions in Complex Time-Sequence based Dynamic Systems (using Transformers and fine-tuning for reasoning ability using Reinforcement Learning)",
        projectLeaders: "*",
        supportingAgency: "*",
        duration: "2025 to *",
        status: "*",
      },
    ],
  },
];

export default function InnovationGrants() {
  const getStatusColor = (status: string) => {
    const lowerStatus = status.toLowerCase();
    if (lowerStatus.includes("ongoing") || lowerStatus.includes("mou")) {
      return "bg-green-100 text-green-800";
    }
    if (lowerStatus.includes("completed")) {
      return "bg-blue-100 text-blue-800";
    }
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Sponsored Research</h1>
          <p className="text-xl">Funded research projects driving innovation and discovery</p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sponsoredResearchData.map((yearData, yearIndex) => (
            <div key={yearIndex} className="mb-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Academic Year: {yearData.year}
                </h2>
                <div className="w-20 h-1 bg-iedc-blue"></div>
                <p className="text-gray-600 mt-2">{yearData.projects.length} Projects</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yearData.projects.map((project, index) => (
                  <Card key={index} className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-iedc-blue">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Badge className={`mb-3 ${getStatusColor(project.status)}`}>
                          <Clock className="w-3 h-3 mr-1" />
                          {project.status}
                        </Badge>
                        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-3">
                          {project.title}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start">
                          <User className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Project Leaders</p>
                            <p className="text-sm text-gray-600">{project.projectLeaders}</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <Building2 className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Supporting Agency</p>
                            <p className="text-sm text-gray-600">{project.supportingAgency}</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <Calendar className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Duration</p>
                            <p className="text-sm text-gray-600">{project.duration}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
