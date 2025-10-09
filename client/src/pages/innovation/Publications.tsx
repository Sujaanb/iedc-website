import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, Users } from "lucide-react";
import { Link } from "wouter";

const publicationCategories = [
  {
    title: "Journal Publications",
    description: "Research published in peer-reviewed academic journals",
    icon: BookOpen,
    link: "/innovation/publications/journal",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Conference Publications",
    description: "Papers presented at national and international conferences",
    icon: Users,
    link: "/innovation/publications/conference",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Books & Book Chapters",
    description: "Published books and contributions to edited volumes",
    icon: FileText,
    link: "/innovation/publications/books",
    color: "from-purple-500 to-purple-600",
  },
];

export default function InnovationPublications() {
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
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Browse Publications by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our research contributions organized by publication type
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publicationCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link key={index} href={category.link}>
                  <Card className="h-full cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-iedc-blue">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 mx-auto`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 text-center mb-6">
                        {category.description}
                      </p>
                      <div className="text-center">
                        <span className="text-iedc-blue font-semibold hover:text-iedc-dark-blue transition-colors">
                          View Publications →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
