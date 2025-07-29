import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Calendar, Filter } from "lucide-react";

// Combine all publication data from different CSV files
const allPublications = [
  // AI/ML Publications
  {
    title: "A MATLAB Expedition Into Image Processing",
    conference: "IEMENTech 2025",
    authors: "Soumya Basu, Anurag Shaw, Rahul Thakur",
    category: "AI/ML",
  },
  {
    title: "A Brief Review on AI Based Stock Market Prediction Tools",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Soumya Basu, Anurag Shaw, Rahul Thakur",
    category: "AI/ML",
  },
  {
    title: "A Comprehensive Study of the Correlation Between Blockchain Dynamics and Cybersecurity: Complementing Digital Trust and Security for Cryptocurrency Transactions",
    conference: "IRTM 2024, NIT Calicut",
    authors: "Snehadri Bhaumik",
    category: "AI/ML",
  },
  {
    title: "Outlier Detection in a Timeseries Data",
    conference: "IRTM 2024, NIT Calicut",
    authors: "Snehadri Bhaumik",
    category: "AI/ML",
  },
  {
    title: "Interpretable AI for Alzheimer's Diagnosis Using Cross Sectional and Longitudinal Data",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Anohita Mukherjee, Sreeparna Das, Saikat Das, Debayuth Banik",
    category: "AI/ML",
  },
  {
    title: "A Basic Framework for Fetal Monitoring in Detecting Stillbirth Risks Using Heart Rate and Fetal Movements",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Saikat Das, Sreeparna Das, Anohita Mukherjee, Debayuth Banik",
    category: "AI/ML",
  },
  {
    title: "Automated Crop Disease Detection using Deep Learning: A Scalable Smart Farming Framework",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Mrinmoy Mondal, Abhigyan Mondal, Arpan Chowdhury, Soumyodip Choudhury, Pratyay Paul",
    category: "AI/ML",
  },
  {
    title: "Optimizing Drug Management: AI-Driven Pharmacy Analytics and Electronic Health Records",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Chandan Kumar Mahato, Sourav Pandey",
    category: "AI/ML",
  },
  {
    title: "Fetal Health Classification Using Machine Learning on Cardiotocography Data",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Sudipta Ray, Shubhayu Basak, Suvrajeet Chatterjee",
    category: "AI/ML",
  },
  {
    title: "UAV-Driven Surveillance: Security Enhancement with ML and Edge Detection integrating LIDAR Sensor for Trespassing and Area Mapping",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Sujay Saha, Susamoy Aich, Nirlov Saha, Debjit Roy, Pratham Padala, Shantanu Ghosh",
    category: "AI/ML",
  },
  {
    title: "Harnessing Machine Learning for Watermarking: A Survey on Robustness and Stealth in Image Protection",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Kunal Routh, Priyanshu Mazumder, Amar Pal",
    category: "AI/ML",
  },
  {
    title: "A Brief Review on Photocatalytic Materials for Waste Water Treatment",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Prativa Saha",
    category: "AI/ML",
  },
  // Antenna Publications
  {
    title: "Design of a Triple Band Microstrip Patch Antenna and Its Performance Enhancement Using Triple Band AMC for Wearable Applications",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Swarnadeep Koley",
    category: "Antenna",
  },
  {
    title: "Design of A Trishul Shape Triple-Band CPW-Fed Antenna for ISM Band, IOT and Satellite Communication",
    conference: "CALCON 2024, Kolkata",
    authors: "Sayan Kundu",
    category: "Antenna",
  },
  {
    title: "A Miniaturized Microstrip Three-Way Equal Power Divider using Hybrid Lumped and Distributed Elements and Recombinant Topology",
    conference: "CALCON 2024, Kolkata",
    authors: "Rahul Ghosh",
    category: "Antenna",
  },
  {
    title: "Design of a Multi-band printed Yagi-Uda antenna for CubeSat Communication",
    conference: "SILCON 2024, Agartala",
    authors: "Kajal Sinha",
    category: "Antenna",
  },
  {
    title: "A reconfigurable triangular-circular microstrip patch antenna with two switches",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Pritam Sarkar",
    category: "Antenna",
  },
  {
    title: "A Metasurface based Dual Band Stop Filter at ISM Bands for Wearable Applications",
    conference: "WAMS 2025, Kancheepuram",
    authors: "Soham Banerjee, Sagnik Chakrabaorty",
    category: "Antenna",
  },
  // Circuit, Device & System Publications
  {
    title: "A Comprehensive Analysis on Comparator, Encoder Circuit to Develop Flash Type ADC Based on Different Implementation Routes",
    conference: "SILCON 2024, Agartala",
    authors: "Siddhartha Bhattacharya",
    category: "Circuit, Device & System",
  },
  {
    title: "Noise Analysis of Bandgap Reference Circuit",
    conference: "CODEC 2024, Kolkata",
    authors: "Uddipan Agasti",
    category: "Circuit, Device & System",
  },
  {
    title: "Design and Performance Analysis of Dynamic and Hybrid CMOS Threshold Logic Based Full Adder Circuit",
    conference: "CODEC 2024, Kolkata",
    authors: "Siddhant Gayen",
    category: "Circuit, Device & System",
  },
  {
    title: "Design and FPGA Implementation of an Efficient Squarer Circuit Using Reversible Logic",
    conference: "EDKCON 2024, Kolkata",
    authors: "Debjit Roy, Agnik Maity, Antarik Sinha",
    category: "Circuit, Device & System",
  },
  {
    title: "Design and Implementation of an Efficient Quantum Cost Optimized Adder Using Reversible Logic Gates",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Shatavisha Dasgupta, Sourav Pandey, Debjit Roy, Agnik Maity, Antarik Sinha",
    category: "Circuit, Device & System",
  },
  {
    title: "An Ultra-Low Power Low Phase Noise Pseudoresistive Astable Multivibrator for MICS Band Wireless Sensor Node Applications",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Soumyojit Chatterjee, Saugata Saha, Kushal Das",
    category: "Circuit, Device & System",
  },
  {
    title: "Design and Fabrication of a 3D Printed Helical Antenna for 2.45 GHz ISM Band Applications with Circular Polarisation and High Gain",
    conference: "MAC 2024, Dehradun",
    authors: "Subhradip Bal",
    category: "Circuit, Device & System",
  },
  // RF & Microwave Publications
  {
    title: "Preparation Design and Implementation of a Portable Microwave Sensor for Characterization of Edible Oils",
    conference: "IEEE Sensors Letters, vol.8, no.12, pp.1-4, Dec 2024",
    authors: "Subha Mandal, Parthib Paul, Shreya Dhar",
    category: "RF & Microwave",
  },
  {
    title: "A low-cost, 3d Printed All-Dielectric Polarization Insensitive Ultra-Wideband Microwave Absorber",
    conference: "APS URSI 2025",
    authors: "Sagnik Chakrabaorty",
    category: "RF & Microwave",
  },
  // Robotics Publications
  {
    title: "A Brief Review on Smart Farming Technologies for Precision Agriculture",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Rishav Raj, Arijit Ghosh, Amar Pal",
    category: "Robotics",
  },
  {
    title: "FPGA-Based 3D EM/MPM Simulation Framework for Medical Image Segmentation Applications",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Saptarshi Banerjee, Ayantika Mondal, Satavisha Dutta, Sayak Nandi",
    category: "Robotics",
  },
  {
    title: "Development of a Cost-Effective and Portable Digital Storage Oscilloscope Using Raspberry Pi Pico and Mobile App",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Priyangshu Mazumder, Animesh Dutta, Soumyadeep Seth, Prativa Saha",
    category: "Robotics",
  },
  {
    title: "FPGA-Based Adaptive Traffic Management System for Optimizing Five-Point Intersection Flow",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Soumyojit Chatterjee",
    category: "Robotics",
  },
  // VLSI Publications
  {
    title: "Exploring Electronic Properties and Molecular Reactivity of Aliphatic and Aromatic Hydrocarbons via DFT based Computations",
    conference: "CALCON 2024, Kolkata",
    authors: "Rishav Dutta",
    category: "VLSI",
  },
  {
    title: "Design of a Voltage Controlled Millimeter-Wave Oscillator for 5G/6G Applications in 180nm CMOS Technology",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Soumyojit Chatterjee",
    category: "VLSI",
  },
  {
    title: "An In-Depth Exploration of Different Analog Circuit Parameters Utilizing Three Amplifier Topologies: A Robust Examination of Gain, Power, Noise, and Bandwidth Characteristics",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Snehadri Bhaumik, Subhradeep Hazra",
    category: "VLSI",
  },
  {
    title: "A First Principle Based Comparative Study Between Pristine and Au-modified Graphene Nanosheet towards Acetaldehyde Sensing Performance",
    conference: "VLSID 2025, Bangalore",
    authors: "Soubarno Chatterjee",
    category: "VLSI",
  },
  // Wireless Communication Publications
  {
    title: "An Ultra-Low Power Low Phase Noise Pseudoresistive Astable Multivibrator for MICS Band Wireless Sensor Node Applications",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Soumyojit Chatterjee",
    category: "Wireless Communication",
  },
  {
    title: "Design of a Flexible Metasurface Based Dual Bandpass Filter in ISM and 5G Cellular Band for Bio-Medical Applications",
    conference: "IEMENTech 2025, Kolkata",
    authors: "Snehanshu Bhattacharjee",
    category: "Wireless Communication",
  },
  {
    title: "A Low Cost Printed Monopole Antenna on a Paper Substrate for ISM Band and 5G Communication Applications",
    conference: "WAMS 2025, Kancheepuram",
    authors: "Swarnadeep Koley",
    category: "Wireless Communication",
  },
];

const categories = [
  "All",
  "AI/ML",
  "Antenna",
  "Circuit, Device & System",
  "RF & Microwave",
  "Robotics",
  "VLSI",
  "Wireless Communication",
];

export default function InnovationPublications() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPublications = selectedCategory === "All" 
    ? allPublications 
    : allPublications.filter(pub => pub.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI/ML": "bg-blue-100 text-blue-800",
      "Antenna": "bg-green-100 text-green-800",
      "Circuit, Device & System": "bg-purple-100 text-purple-800",
      "RF & Microwave": "bg-red-100 text-red-800",
      "Robotics": "bg-orange-100 text-orange-800",
      "VLSI": "bg-indigo-100 text-indigo-800",
      "Wireless Communication": "bg-pink-100 text-pink-800",
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Publications</h1>
          <p className="text-xl">Research publications and academic contributions</p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Summary Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-iedc-blue text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{allPublications.length}</h3>
                <p className="text-lg">Total Publications</p>
              </CardContent>
            </Card>
            <Card className="bg-iedc-light-blue text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{categories.length - 1}</h3>
                <p className="text-lg">Research Areas</p>
              </CardContent>
            </Card>
            <Card className="bg-iedc-gray text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">2024-25</h3>
                <p className="text-lg">Active Years</p>
              </CardContent>
            </Card>
            <Card className="bg-green-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">50+</h3>
                <p className="text-lg">Contributors</p>
              </CardContent>
            </Card>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Filter className="iedc-blue mr-2 h-5 w-5" />
              <h3 className="text-lg font-semibold iedc-gray">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-iedc-blue hover:bg-iedc-light-blue" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Publications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPublications.map((publication, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-iedc-blue">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge className={`mb-3 ${getCategoryColor(publication.category)}`}>
                      <BookOpen className="w-3 h-3 mr-1" />
                      {publication.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold iedc-gray mb-4 line-clamp-3">
                    {publication.title}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Users className="iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Authors</p>
                        <p className="text-sm text-gray-600">{publication.authors}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar className="iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Conference/Journal</p>
                        <p className="text-sm text-gray-600">{publication.conference}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No publications found for the selected category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}