#!/usr/bin/env python3
"""
Script to generate Conference.tsx from conference_data.json
"""

import json

# Read the JSON data
with open('conference_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# TypeScript header
tsx_content = '''import { Card, CardContent } from "@/components/ui/card";
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
'''

# Process each academic year
for year_data in data['academicYears']:
    tsx_content += f'  {{\n'
    tsx_content += f'    year: "{year_data["year"]}",\n'
    tsx_content += f'    publications: [\n'

    # Process each publication
    for pub in year_data['publications']:
        # Escape quotes in strings
        paper = pub['paper'].replace('"', '\\"')
        authors = pub['authors'].replace('"', '\\"')
        conference = pub['conference'].replace('"', '\\"')
        date = pub['date'].replace('"', '\\"')

        tsx_content += '      {\n'
        tsx_content += f'        paper: "{paper}",\n'
        tsx_content += f'        authors: "{authors}",\n'

        # Add DOI if present
        if pub.get('doi'):
            doi = pub['doi'].replace('"', '\\"')
            tsx_content += f'        doi: "{doi}",\n'

        tsx_content += f'        conference: "{conference}",\n'
        tsx_content += f'        date: "{date}",\n'
        tsx_content += '      },\n'

    tsx_content += '    ],\n'
    tsx_content += '  },\n'

tsx_content += '];\n\n'

# Add the component code
tsx_content += '''export default function InnovationConference() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Conference Publications</h1>
          <p className="text-xl">Papers presented at national and international conferences</p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {conferenceData.map((yearData, yearIndex) => (
            <div key={yearIndex} className="mb-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Academic Year: {yearData.year}
                </h2>
                <div className="w-20 h-1 bg-iedc-blue"></div>
                <p className="text-gray-600 mt-2">{yearData.publications.length} Publications</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yearData.publications.map((pub, index) => (
                  <Card key={index} className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-iedc-blue">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Badge className="mb-3 bg-purple-100 text-purple-800">
                          <BookOpen className="w-3 h-3 mr-1" />
                          Conference Paper
                        </Badge>
                        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-3">
                          {pub.paper}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start">
                          <User className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Authors</p>
                            <p className="text-sm text-gray-600">{pub.authors}</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <BookOpen className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Conference</p>
                            <p className="text-sm text-gray-600">{pub.conference}</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <Calendar className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Date</p>
                            <p className="text-sm text-gray-600">{pub.date}</p>
                          </div>
                        </div>

                        {pub.doi && (
                          <div className="mt-4">
                            <a
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm text-iedc-blue hover:text-iedc-dark-blue font-medium transition-colors"
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              View DOI
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
'''

# Write to Conference.tsx
output_path = 'client/src/pages/innovation/Conference.tsx'
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(tsx_content)

print(f"[SUCCESS] Generated {output_path}")
print(f"Total academic years: {len(data['academicYears'])}")
for year_data in data['academicYears']:
    print(f"   - {year_data['year']}: {len(year_data['publications'])} publications")
print(f"Total publications: {sum(len(y['publications']) for y in data['academicYears'])}")
