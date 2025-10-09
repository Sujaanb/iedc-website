import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, User, Calendar, ExternalLink, Building2, FileText, Hash } from "lucide-react";

type BookChapterPublication = {
  paper: string;
  authors: string;
  publisher?: string;
  year: string;
  isbn?: string;
  publication?: string;
  bookSeries?: string;
  pages?: string;
  doi?: string;
};

type AcademicYearData = {
  year: string;
  publications: BookChapterPublication[];
};

const bookChapterData: AcademicYearData[] = [
  {
    year: "July 2024 - June 2025",
    publications: [
      {
        paper: "C++ Chronicles: Epic Adventures in the Galaxy of Coding",
        authors: "Banerjee S.",
        publisher: "Gyanvi Publication",
        year: "2024",
        isbn: "978-81-9601-118-5",
      },
      {
        paper: "A Little Dictionary of Data Structures: Building Blocks for Efficient Algorithms",
        authors: "Banerjee S.",
        publisher: "Gyanvi Publication",
        year: "2024",
        isbn: "978-81-9649-001-6",
      },
      {
        paper: "Unveiling Big Data: Unlocking Insights",
        authors: "Banerjee S., Banerjee B.",
        publisher: "Gyanvi Publication",
        year: "2024",
        isbn: "978-81-9649-005-4",
      },
      {
        paper: "Utilization of Personalized PageRank for Protein–Protein Interaction Analysis for Identification of Potential Therapeutic Targets in Alzheimer's Disease",
        authors: "Sengupta A., Chakraborty S., Gangopadhyay M.",
        publisher: "Springer, Singapore",
        year: "2025",
        publication: "Proceedings of IEMTRONICS 2024",
        bookSeries: "Lecture Notes in Electrical Engineering, vol 1229",
        doi: "10.1007/978-981-97-4780-1_23",
      },
      {
        paper: "Quantum Mechanics",
        authors: "Goswami S., Ghosh M.",
        publisher: "Gyanvi Publication",
        year: "2024",
        isbn: "978-81-9618-502-9",
      },
      {
        paper: "Essential Equations: A Quick Reference for Physics Enthusiasts",
        authors: "Goswami S.",
        publisher: "Gyanvi Publication",
        year: "2024",
        isbn: "978-81-9618-501-2",
      },
      {
        paper: "Implementing Artificial Intelligence and Machine Learning in Environmental Engineering: A Critical Analysis",
        authors: "Maiti S.K., Chakraborty S., Chakraborty A.S., Das S.",
        publisher: "Springer Nature",
        year: "2024",
        publication: "Big Data Analytics for Environmental Monitoring and Management",
        pages: "165-181",
        doi: "10.1007/978-981-97-4966-9_9",
      },
      {
        paper: "Underwater Communication with Active Controlled Flux Compression Using Unipolar Pulsed Supply and Boost Converter Techniques",
        authors: "Tarafdar B., Bhattacharjee S., Dutta Chowdhury A., Ghosh P., Samanta A.",
        publisher: "Springer, Singapore",
        year: "2025",
        publication: "Intelligent Systems and Sustainable Computing. ICISSC 2024. Smart Innovation, Systems and Technologies, vol 421",
        doi: "10.1007/978-981-97-6683-3_15",
      },
      {
        paper: "Heart Disease Prediction: A Comprehensive Machine Learning Approach Leveraging Data Balancing, Feature Selection, and Classification",
        authors: "Shil M., Gangopadhyay M.",
        publisher: "Springer, Singapore",
        year: "2025",
        publication: "Proceedings of IEMTRONICS 2024. Lecture Notes in Electrical Engineering, vol 1229",
        doi: "10.1007/978-981-97-4780-1_62",
      },
    ],
  },
  {
    year: "July 2023 - June 2024",
    publications: [
      {
        paper: "Pothole Detection Using Ensemble Learning-Based Approach for Maintenance of Indian Roads",
        authors: "Bhowmik T., Mukherjee A., Sau K., Kundu A., Sarkar S.",
        publisher: "Springer, Singapore",
        year: "2024",
        publication: "Proceedings of IEMTRONICS 2023. Lecture Notes in Electrical Engineering, vol 1117",
        pages: "661-672",
        doi: "10.1007/978-981-99-9436-6_48",
      },
    ],
  },
];

export default function InnovationBookChapter() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Books & Book Chapters</h1>
          <p className="text-xl">Published books and contributions to edited volumes</p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {bookChapterData.map((yearData, yearIndex) => (
            <div key={yearIndex} className="mb-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Academic Year: {yearData.year}
                </h2>
                <div className="w-20 h-1 bg-iedc-blue"></div>
                <p className="text-gray-600 mt-2">{yearData.publications.length} Publications</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yearData.publications.map((publication, index) => (
                  <Card key={index} className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-iedc-blue">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Badge className={`mb-3 ${
                          publication.isbn ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
                        }`}>
                          <BookOpen className="w-3 h-3 mr-1" />
                          {publication.isbn ? "Book" : "Book Chapter"}
                        </Badge>
                        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-3">
                          {publication.paper}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start">
                          <User className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Author(s)</p>
                            <p className="text-sm text-gray-600">{publication.authors}</p>
                          </div>
                        </div>

                        {publication.publisher && (
                          <div className="flex items-start">
                            <Building2 className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">Publisher</p>
                              <p className="text-sm text-gray-600">{publication.publisher}</p>
                            </div>
                          </div>
                        )}

                        {publication.publication && (
                          <div className="flex items-start">
                            <FileText className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">Publication</p>
                              <p className="text-sm text-gray-600">{publication.publication}</p>
                            </div>
                          </div>
                        )}

                        {publication.bookSeries && (
                          <div className="flex items-start">
                            <BookOpen className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">Book Series</p>
                              <p className="text-sm text-gray-600">{publication.bookSeries}</p>
                            </div>
                          </div>
                        )}

                        <div className="flex items-start">
                          <Calendar className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">Year</p>
                            <p className="text-sm text-gray-600">{publication.year}</p>
                          </div>
                        </div>

                        {publication.isbn && (
                          <div className="flex items-start">
                            <Hash className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">ISBN</p>
                              <p className="text-sm text-gray-600">{publication.isbn}</p>
                            </div>
                          </div>
                        )}

                        {publication.pages && (
                          <div className="flex items-start">
                            <FileText className="text-iedc-blue h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">Pages</p>
                              <p className="text-sm text-gray-600">{publication.pages}</p>
                            </div>
                          </div>
                        )}

                        {publication.doi && (
                          <div className="mt-4">
                            <a
                              href={`https://doi.org/${publication.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm text-iedc-blue hover:text-iedc-dark-blue font-medium transition-colors"
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              View on DOI
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
