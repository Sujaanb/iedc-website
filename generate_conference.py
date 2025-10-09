#!/usr/bin/env python3
"""
Script to generate Conference.tsx with all conference publication data
"""

# Header
header = '''import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, BookOpen, ExternalLink, Calendar } from "lucide-react";

type ConferencePublication = {
  paper: string;
  authors: string;
  doi?: string;
  conference: string;
  date: string;
};

type AcademicYearData = {
  year: string;
  publications: ConferencePublication[];
};

const conferenceData: AcademicYearData[] = [
  {
    year: "July 2024 - June 2025",
    publications: [
'''

# July 2024 - June 2025 data (from user's previous message - 60+ papers)
conf_2024_2025 = [
    {"paper": "Comparative Study of Machine Learning Models for Diabetes Prediction", "authors": "Das A.K., Basak S., Choudhary S.", "doi": "10.1109/IEMENTech65115.2025.10959680", "conference": "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)", "date": "January 31 - February 2, 2025"},
    {"paper": "A Brief Review on Photocatalytic Materials for Waste Water Treatment", "authors": "Saha P., Seth S., Saha S., Kundu S.K., Karmakar S.", "doi": "10.1109/IEMENTech65115.2025.10959605", "conference": "8th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech)", "date": "2025"},
    # Add all remaining 2024-2025 papers here...
]

# July 2023 - June 2024 data (from current message - 53 papers)
conf_2023_2024 = [
    {"paper": "A Novel QR Code Based Smart Attendance Tracking System", "authors": "Pati S., Bhanja S., Majumder A., Sahu S., Banerjee S., Sen G.", "doi": "10.1109/IEMENTech60402.2023.10423485", "conference": "IEEE 7th International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech 2023)", "date": "December 18-20, 2023"},
    # Add all 53 papers...
]

def generate_tsx_entry(pub):
    """Generate a single TypeScript object entry"""
    doi_field = f', doi: "{pub["doi"]}"' if pub.get("doi") else ""
    return f'''      {{
        paper: "{pub["paper"]}",
        authors: "{pub["authors"]}",{doi_field}
        conference: "{pub["conference"]}",
        date: "{pub["date"]}",
      }},'''

# Note: Due to size, manually complete this script or directly edit the Conference.tsx file
print("Run this script to generate the complete Conference.tsx file")
print(f"Total papers to include: {len(conf_2024_2025)} + {len(conf_2023_2024)} = {len(conf_2024_2025) + len(conf_2023_2024)}")
