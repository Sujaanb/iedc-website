import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, DollarSign, FileText } from "lucide-react";

const grants = [
  {
    pi: "Dr. Malay Gangopadhyay",
    title: "AUTONOMOUS MARS ROVER ODDITY",
    amount: "4 Lakhs",
  },
  {
    pi: "Dr. Malay Gangopadhyay",
    title: "FABRICATION OF MICROWAVE BIOSENSORS ON UNCONVENTIONAL 3D PRINTED SUBSTRATE",
    amount: "1 Lakh",
  },
  {
    pi: "Prof. Samit Kamarkar",
    title: "DESIGN AND DEVELOPMENT OF A LOW-COST PRECISE ELECTROMETER FOR L-V CHARACTERIZATION OF CARBON THIN FILMS",
    amount: "30 Thousand",
  },
  {
    pi: "Dr. Mili Sarker",
    title: "SMART ATTENDANCE SYSTEM (GEN 2.0)",
    amount: "20 Thousand",
  },
  {
    pi: "Dr. Mili Sarker",
    title: "FABRICATION OF MICROWAVE BIOSENSORS ON UNCONVENTIONAL 3D PRINTED SUBSTRATE",
    amount: "1.25 Lakhs",
  },
  {
    pi: "Dr. Gobinda Sen",
    title: "DESIGN AND FABRICATION OF LOW-COST PORTABLE MICROWAVE SENSORS FOR FOOD ADULTERATION DETECTION",
    amount: "15 Thousand",
  },
  {
    pi: "Prof. Soumik Kumar Kundu",
    title: "DEVELOPMENT OF AN AI BASED STOCK MARKET ANALYSIS APPLICATION",
    amount: "20 Thousand",
  },
  {
    pi: "Prof. Soumik Kumar Kundu",
    title: "AI BASED SMART FARMING FOR ENHANCED AGRICULTURAL PRODUCTIVITY AND SUSTAINABILITY",
    amount: "8.5 Thousand",
  },
  {
    pi: "Dr. Goutam Ghosh",
    title: "FALL DETECTION IN PARKINSON'S DISEASE USING WEARABLE SENSORS",
    amount: "45 Thousand",
  },
  {
    pi: "Dr. Arindam Chakraborty",
    title: "IOT BASED VOICE-ACTIVATED SMART WHEELCHAIR WITH STAIR-CLIMBING ABILITY FOR PATIENTS HAVING NEUROLOGICAL DISORDERS",
    amount: "8.5 Thousand",
  },
  {
    pi: "Prof. Amit Kumar Das",
    title: "SMART SAFETY GLASSES FOR THE VISUALLY COMBINING: INTEGRATING OBJECT DETECTION, SOUND ANALYSIS AND SPEECH RECOGNITION",
    amount: "75 Thousand",
  },
  {
    pi: "Dr. Sutanu Ghosh",
    title: "RECONFIGURABLE INTELLIGENT SURFACES FOR NEXT GENERATION WIRELESS COMMUNICATION",
    amount: "20 Thousand",
  },
  {
    pi: "Prof. Debadoti Ghosh",
    title: "DESIGN OF A PROTOTYPE OF PYROLYSIS CHAMBER TO CONVERT WASTE PLASTIC INTO FUEL",
    amount: "1 Lakh",
  },
  {
    pi: "Prof. Anindita Das Bhattacharjee",
    title: "MULTI MODAL DATA ACQUISITION AND ANALYSIS USING DRONES FOR AGRICULTURE AND ENVIRONMENTAL PRESERVATION",
    amount: "9 Lakhs",
  },
  {
    pi: "Dr. Mili Sarker",
    title: "DESIGN AND DEVELOPMENT OF AN EFFICIENT ALU FOR HIGH SPEED AND LOW POWER APPLICATIONS",
    amount: "8.3 Lakhs",
  },
  {
    pi: "Prof. Soumik Kumar Kundu",
    title: "SURFACE PROFILE STUDY OF AN IN-HOUSE DEVELOPED METALLIC AND NON-METALLIC THIN FILMS USING A STYLUS-TYPE SURFACE PROFILOMETER",
    amount: "16 Lakhs",
  },
  {
    pi: "Dr. Indranil Maity",
    title: "INCORPORATION OF 2D - MATERIAL BASED SOLID STATE GAS SENSOR DEVICES TOWARDS THE APPLICATION OF HEALTHCARE MONITORING SYSTEMS",
    amount: "7 Lakhs",
  },
  {
    pi: "Prof. Malay Gangopadhyay",
    title: "WEARABLE ANTENNA DESIGN FOR DEFENSE APPLICATION",
    amount: "1 Lakh",
  },
  {
    pi: "Dr. Indranil Maity",
    title: "DESIGN OF DEVELOPMENT OF 2D MATERIALS BASED GAS SENSOR DEVICES FOR EARLY DETECTION OF DIABETES AND NAFLD BIOMARKERS",
    amount: "80 Thousand",
  },
  {
    pi: "Prof. Debadoti Ghosh",
    title: "DESIGN OF PYROLYSIS CHAMBER FOR PRODUCING PYROLIZED OIL FROM WASTE PLASTICS DUE TO MAJOR MISHAP",
    amount: "25 Thousand",
  },
  {
    pi: "Dr. Gobinda Sen",
    title: "IMPLEMENTATION OF IOT BASED SMART REFRIGERATOR SYSTEM",
    amount: "25 Thousand",
  },
  {
    pi: "Dr. Ratna Chakraborty",
    title: "AI BASED WASTE DETECTION AND CLASSIFICATION FOR WATERBODY",
    amount: "15 Thousand",
  },
  {
    pi: "Dr. Ratna Chakraborty",
    title: "GUIDANCE BOT FOR VISUALLY IMPAIRED PEOPLE",
    amount: "2 Lakhs",
  },
  {
    pi: "Dr. Sanghamitra Poddar",
    title: "DESIGN AND HARDWARE IMPLEMENTATION OF LIGHT WEIGHT CRYPTOGRAPHIC ALGORITHM FOR RESOURCE CONSTRAINED IOT DEVICES AND SENSORS",
    amount: "16 Lakhs",
  },
  {
    pi: "Dr. G.S. Taki",
    title: "ENESYTHESIS BY ELECTRON CYCLOTRON RESONANCE (ECR) PLASMA ENHANCED CHEMICAL VAPOUR DEPOSITION TECHNIQUE",
    amount: "45 Thousand",
  },
  {
    pi: "Dr. G.S. Taki",
    title: "INVESTIGATION OF MAGNETIC PROPERTIES OF ION BEAM IRRADIATED GRAPHENE AS POTENTIAL SPINTRONIC MATERIAL",
    amount: "1.5 Lakhs",
  },
  {
    pi: "Prof. Samit Karmakar",
    title: "PLASMA DIAGNOSTICS AND PREDICTIVE ANALYSIS OF PRESSURE AND TEMPERATURE FOR VARIOUS EXPERIMENTS CARRIED OUT IN ECRPECVD SYSTEM",
    amount: "50 Thousand",
  },
  {
    pi: "Prof. Soumik Kumar Kundu",
    title: "PERFORMANCE ENHANCEMENT OF EXISTING INDIGENOUS DC MAGNETRON SPUTTERING SETUP USING HIGH VACUUM SYSTEM FOR DEVELOPING CONTAMINANT FREE NANO-METRIC METALLIC THIN FILM",
    amount: "16 Lakhs",
  },
];

export default function InnovationGrants() {
  // Function to get badge color based on amount
  const getAmountBadgeColor = (amount: string) => {
    if (amount.includes("Lakh")) {
      const value = parseFloat(amount);
      if (value >= 10) return "bg-green-100 text-green-800";
      if (value >= 5) return "bg-blue-100 text-blue-800";
      return "bg-purple-100 text-purple-800";
    }
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Research Grants</h1>
          <p className="text-xl">Funded research projects driving innovation and discovery</p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Summary Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-iedc-blue text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{grants.length}</h3>
                <p className="text-lg">Total Projects</p>
              </CardContent>
            </Card>
            <Card className="bg-iedc-light-blue text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">20+</h3>
                <p className="text-lg">Principal Investigators</p>
              </CardContent>
            </Card>
            <Card className="bg-iedc-gray text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">75+</h3>
                <p className="text-lg">Lakhs Total Funding</p>
              </CardContent>
            </Card>
          </div>

          {/* Grants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grants.map((grant, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-iedc-blue">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge className={`mb-3 ${getAmountBadgeColor(grant.amount)}`}>
                      <DollarSign className="w-3 h-3 mr-1" />
                      ₹{grant.amount}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold iedc-gray mb-4 line-clamp-3">
                    {grant.title}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <User className="iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Principal Investigator</p>
                        <p className="text-sm text-gray-600">{grant.pi}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}