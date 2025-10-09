import json

# Read the JSON file
with open('book_chapter_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Start building the TSX content
tsx_content = '''import { Card, CardContent } from "@/components/ui/card";
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
'''

# Process each academic year
for year_data in data['academicYears']:
    tsx_content += f'''  {{
    year: "{year_data['year']}",
    publications: [
'''

    for pub in year_data['publications']:
        # Escape quotes in strings
        paper = pub['paper'].replace('"', '\\"')
        authors = pub['authors'].replace('"', '\\"')
        year = pub['year']

        tsx_content += f'''      {{
        paper: "{paper}",
        authors: "{authors}",
'''

        # Handle optional fields
        if 'publisher' in pub:
            publisher = pub['publisher'].replace('"', '\\"')
            tsx_content += f'        publisher: "{publisher}",\n'

        tsx_content += f'        year: "{year}",\n'

        if 'isbn' in pub:
            tsx_content += f'        isbn: "{pub["isbn"]}",\n'

        if 'publication' in pub:
            publication = pub['publication'].replace('"', '\\"')
            tsx_content += f'        publication: "{publication}",\n'

        if 'bookSeries' in pub:
            bookSeries = pub['bookSeries'].replace('"', '\\"')
            tsx_content += f'        bookSeries: "{bookSeries}",\n'

        if 'pages' in pub:
            tsx_content += f'        pages: "{pub["pages"]}",\n'

        if 'doi' in pub:
            tsx_content += f'        doi: "{pub["doi"]}",\n'

        tsx_content += '      },\n'

    tsx_content += '''    ],
  },
'''

# Close the data array
tsx_content += '''];

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
'''

# Write to the output file
with open('client/src/pages/innovation/BookChapter.tsx', 'w', encoding='utf-8') as f:
    f.write(tsx_content)

print("[SUCCESS] BookChapter.tsx has been generated successfully!")
print(f"[SUCCESS] Total publications: {sum(len(year['publications']) for year in data['academicYears'])}")
