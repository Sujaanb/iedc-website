import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, FileText, Globe } from "lucide-react";

const patents = [
  {
    title: "SOLAR POWERED THERMAL JACKET",
    inventors: "SUBHAMOY ROY",
    dateGranted: "29.05.2024",
    type: "National",
    patentNumber: "",
  },
  {
    title: "SMALLEST ISOSCELES TRIANGULAR MICROSTRIP PATCH ANTENNA FOR WLAN APPLICATION",
    inventors: "MURARI SHAW",
    dateGranted: "12.09.2024",
    type: "National",
    patentNumber: "",
  },
  {
    title: "THERMAL COMPRESS LUMBAR SUPPORT BELT",
    inventors: "SUBHABRATA BANERJEE, MALAY GANGOPADHYAY, SANGHAMITRA PODDAR",
    dateGranted: "03.12.2024",
    type: "International",
    patentNumber: "UK Design number: 6407070",
  },
  {
    title: "PERSONALISED HEALTHCARE: ML-DRIVEN WEARABLE SENSOR MONITORING & CLASSIFICATION",
    inventors: "SOUMIK KUMAR KUNDU",
    dateGranted: "09.06.2024",
    type: "National",
    patentNumber: "202431065147A",
  },
  {
    title: "PERSONALISED HEALTHCARE: ML-DRIVEN WEARABLE SENSOR MONITORING & CLASSIFICATION",
    inventors: "SAMIT KARMAKAR",
    dateGranted: "09.06.2024",
    type: "National",
    patentNumber: "202431065147A",
  },
  {
    title: "SOLAR ENERGY DRIVEN AMMONIA SYNTHESIS IN WET NITROGEN ENVIRONMENT USING MODIFIED PEROVSKITE-NANOSTRUCTURE BASED PHOTO-CATALYTIC WATER SPLITTING",
    inventors: "G.S.TAKI, SAMIT KARMAKAR, SOUMIK KUMAR KUNDU",
    dateGranted: "",
    type: "National",
    patentNumber: "",
  },
  {
    title: "IMPLEMENTATION OF SILICON-ON-INSULATOR(SOI) BASED POWER JUNCTION-LESS TRANSISTOR DEVICE SWITCHING IN SWITCH MODE POWER SUPPLY(SMPS) CIRCUIT",
    inventors: "ARINDAM CHAKRABORTY, MALAY GANGOPADHYAY",
    dateGranted: "",
    type: "National",
    patentNumber: "",
  },
  {
    title: "RESONANT FREQUENCY OPTIMIZATION AND FABRICATION OF COAXIALLY FED RECTANGULAR MICROSTRIP ANTENNA USING PARTICLE SWARM OPTIMIZATION ALGORITHM",
    inventors: "MALAY GANGOPADHYAY",
    dateGranted: "",
    type: "National",
    patentNumber: "",
  },
  {
    title: "A PERMANENT MAGNET ELECTRON CYCLOTRON RESONANCE PLASMA ENHANCED MULTI-FACILITY NANO-METRIC FILM DEPOSITION SYSTEM",
    inventors: "G. S. TAKI",
    dateGranted: "",
    type: "National",
    patentNumber: "",
  },
  {
    title: "THREE INPUT OPTICAL LOGIC GATE USING FOURIER TRANSFORM METHOD",
    inventors: "MILI SARKAR",
    dateGranted: "",
    type: "National",
    patentNumber: "",
  },
  {
    title: "REAL TIME LPG GAS MONITORING AND AUTOMATIC BOOKING ALERT WITH LPG LEAKAGE AND FIRE DETECTION",
    inventors: "MALAY GANGOPADHYAY",
    dateGranted: "",
    type: "National",
    patentNumber: "",
  },
  {
    title: "I – JAR A SYSTEM FOR PERSONAL COOLING THROUGH COLD WATER SHOWERING",
    inventors: "SMIHIR LAL SAHA, MALAY GANGOPADHYAY",
    dateGranted: "",
    type: "National",
    patentNumber: "",
  },
  {
    title: "MIMLI: A Lightweight Block Cipher of IoT Resource Constrained Devices",
    inventors: "MIHIR LAL SAHA, MALAY GANGOPADHYAY, SANGHAMITRA PODDAR, SUBHABRATA BANERJEE",
    dateGranted: "",
    type: "National",
    patentNumber: "",
  },
  {
    title: "RESONANT FREQUENCY OPTIMIZATION AND FABRICATION OF MICROSTRIP FED MICROSTRIP ANTENNA USING PARTICLE SWARM OPTIMIZATION ALGORITHM",
    inventors: "MALAY GANGOPADHYAY",
    dateGranted: "",
    type: "National",
    patentNumber: "",
  },
  {
    title: "A SYSTEM ARCHITECTURE FOR BOTH SPECTRUM AND ENERGY EFFICIENT IOT NETWORK OPERATION",
    inventors: "SUTANU GHOSH, MALAY GANGOPADHYAY",
    dateGranted: "",
    type: "National",
    patentNumber: "",
  },
  {
    title: "SMART ALERTING SYSTEM FOR CRITICAL PATIENT",
    inventors: "GOBINDA SEN, MIHIR LAL SAHA, SUBHABRATA BANERJEE, MALAY GANGOPADHYAY",
    dateGranted: "",
    type: "National",
    patentNumber: "",
  },
  {
    title: "AQUALYNK: CONNECTED PISCICULTURE USING INTERNET OF THINGS(IOT)",
    inventors: "SUBHABRATA BANERJEE, MALAY GANGOPADHYAY, SANGHAMITRA PODDAR",
    dateGranted: "",
    type: "National",
    patentNumber: "",
  },
  {
    title: "A SYSTEM ARCHITECTURE FOR SECURED HEALTHCARE APPLICATION FOR NOMA ENABLED COGNITIVE RADIO SYSTEM",
    inventors: "SUTANU GHOSH",
    dateGranted: "",
    type: "National",
    patentNumber: "",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patents.map((patent, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-iedc-blue">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge className={`mb-3 ${
                      patent.type === "International" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      <Globe className="w-3 h-3 mr-1" />
                      {patent.type}
                    </Badge>
                    <h3 className="text-lg font-bold iedc-gray mb-3 line-clamp-3">
                      {patent.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <User className="iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Inventor(s)</p>
                        <p className="text-sm text-gray-600">{patent.inventors}</p>
                      </div>
                    </div>
                    
                    {patent.dateGranted && (
                      <div className="flex items-center">
                        <Calendar className="iedc-blue h-4 w-4 mr-2" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Date Granted</p>
                          <p className="text-sm text-gray-600">{patent.dateGranted}</p>
                        </div>
                      </div>
                    )}
                    
                    {patent.patentNumber && (
                      <div className="flex items-start">
                        <FileText className="iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Patent Number</p>
                          <p className="text-sm text-gray-600">{patent.patentNumber}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {!patent.dateGranted && (
                    <div className="mt-4">
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        Pending
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}