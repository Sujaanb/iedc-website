import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Students presenting startup pitch",
    title: "Startup Pitch Day",
    description: "Students presenting innovative business ideas",
  },
  {
    src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "AI and ML workshop session",
    title: "AI/ML Workshop",
    description: "Hands-on training in artificial intelligence",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Faculty mentorship session",
    title: "Faculty Mentorship",
    description: "Collaborative guidance sessions",
  },
  {
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "IoT demonstration with sensors and devices",
    title: "IoT Innovation",
    description: "Internet of Things project showcase",
  },
  {
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Innovation awards ceremony",
    title: "Innovation Awards",
    description: "Recognizing outstanding achievements",
  },
  {
    src: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "VR/AR technology demonstration",
    title: "VR/AR Experience",
    description: "Immersive technology exploration",
  },
];

export default function Gallery() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-iedc-blue to-iedc-light-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Gallery</h1>
          <p className="text-xl">Showcasing our recent activities and achievements</p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600"
              alt="Students working on robotics projects in modern lab"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold iedc-gray">Innovation Lab in Action</h3>
              <p className="text-gray-600">Students collaborating on cutting-edge robotics projects</p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="mt-4">
                  <h4 className="text-lg font-semibold iedc-gray">{image.title}</h4>
                  <p className="text-gray-600 text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-iedc-blue text-white max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Join Our Innovation Journey</h3>
                <p className="text-lg mb-6">
                  Be part of the next generation of innovators and entrepreneurs. Experience cutting-edge technology and build solutions for tomorrow.
                </p>
                <Link href="/contact">
                  <Button className="bg-white text-iedc-blue hover:bg-gray-100 font-semibold">
                    Get In Touch
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
