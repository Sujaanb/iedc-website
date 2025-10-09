import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, FileText, ExternalLink, CheckCircle2, Clock } from "lucide-react";

type Patent = {
  title: string;
  inventors: string;
  applicationNumber: string;
  status: "Published" | "Granted";
  supportingFile?: string;
};

type AcademicYearData = {
  year: string;
  patents: Patent[];
};

const patentData: AcademicYearData[] = [
  {
    year: "July 2024 - June 2025",
    patents: [
      {
        title: "Inertial Sensor Based Hand Gesture Recognition System Using SVM and Android Interface",
        inventors: "Rishav Saha, Ritam De, Rupkatha Basu, Sutapa Ray Adhikary, Malay Gangopadhyaya",
        applicationNumber: "202131029311",
        status: "Published",
        supportingFile: "Inertial Sensor Based Hand Gesture Recognition System Using SVM and Android Interface.pdf",
      },
      {
        title: "AI BASE DEVICE FOR ANALYSING BIOMEDICAL IMAGES",
        inventors: "Dr. Durgesh Kumar, Moloy Dhar, Dr. Priyanka Saha, Dr. Samarjit Roy, Sulagna Ray, Dr. Tanima Bhowmik, Sutapa Ray, Dr. Emona Datta, Bipasha Guha Roy, Dr. Deepsubhra Guha Roy",
        applicationNumber: "6394893",
        status: "Granted",
        supportingFile: "AI BASE DEVICE FOR ANALYSING BIOMEDICAL IMAGES.pdf",
      },
      {
        title: "SMALLEST ISOSCELES TRIANGULAR MICROSTRIP PATCH ANTENNA FOR WLAN APPLICATION",
        inventors: "Dr. Murari Shaw, Dr. Malay Gangopadhyaya",
        applicationNumber: "201931008854",
        status: "Granted",
        supportingFile: "https://drive.google.com/file/d/1Esew30qmeX8Ax1wNWLnyOL5Bmzt6Inx5/view",
      },
      {
        title: "MIMLI: A Lightweight Block Cipher for IoT Resource Constrained Devices",
        inventors: "Mihir Lal Saha, Malay Gangopadhyaya, Siddhartha Roy, Sanghamitra Poddar, Sayan Chatterjee, Subhabrata Banerjee",
        applicationNumber: "*",
        status: "Published",
        supportingFile: "https://drive.google.com/file/d/1UJWijbwkG2ICHVqPGbL10mLZw17tYJil/view?usp=sharing",
      },
      {
        title: "PERSONALISED HEALTHCARE: MACHINE LEARNING-DRIVEN WEARABLE SENSOR MONITORING AND CLASSIFICATION",
        inventors: "Soumik Kumar Kundu, Samit Karmakar",
        applicationNumber: "202431065147 A",
        status: "Published",
        supportingFile: "PERSONALISED HEALTHCARE MACHINE LEARNING-DRIVEN WEARABLE SENSOR MONITORING AND CLASSIFICATION_202431065147 (1).pdf",
      },
    ],
  },
];

export default function InnovationPatents() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Patents</h1>
          <p className="text-xl">Intellectual property and innovations protected by patents</p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {patentData.map((yearData, yearIndex) => (
            <div key={yearIndex} className="mb-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Academic Year: {yearData.year}
                </h2>
                <div className="w-20 h-1 bg-iedc-blue"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yearData.patents.map((patent, index) => (
                  <Card key={index} className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-iedc-blue">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Badge className={`mb-3 ${
                          patent.status === "Granted"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {patent.status === "Granted" ? (
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                          ) : (
                            <Clock className="w-3 h-3 mr-1" />
                          )}
                          {patent.status}
                        </Badge>
                        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-3">
                          {patent.title}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start">
                          <User className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Inventor(s)</p>
                            <p className="text-sm text-gray-600">{patent.inventors}</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <FileText className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Application Number</p>
                            <p className="text-sm text-gray-600">{patent.applicationNumber}</p>
                          </div>
                        </div>

                        {patent.supportingFile && (
                          <div className="mt-4">
                            <a
                              href={patent.supportingFile.startsWith('http') ? patent.supportingFile : `#`}
                              target={patent.supportingFile.startsWith('http') ? "_blank" : undefined}
                              rel={patent.supportingFile.startsWith('http') ? "noopener noreferrer" : undefined}
                              className="inline-flex items-center text-sm text-iedc-blue hover:text-iedc-dark-blue font-medium transition-colors"
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              View Supporting Document
                            </a>
                          </div>
                        )}
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