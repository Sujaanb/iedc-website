import { Link } from "wouter";
import { Lightbulb } from "lucide-react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Team", path: "/team" },
  { name: "Gallery", path: "/gallery" },
];

const moreLinks = [
  { name: "Contact", path: "/contact" },
];

const innovationLinks = [
  { name: "Start-ups", path: "/innovation/startups" },
  { name: "Patents", path: "/innovation/patents" },
  { name: "Research Grants", path: "/innovation/grants" },
  { name: "Publications", path: "/innovation/publications" },
  { name: "Projects", path: "/innovation/projects" },
];

export default function Footer() {
  return (
    <footer className="bg-iedc-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-iedc-blue rounded-lg flex items-center justify-center mr-3">
                <Lightbulb className="text-white h-4 w-4" />
              </div>
              <div>
                <div className="text-lg font-bold">IEDC</div>
                <div className="text-xs text-gray-400">IEM Salt Lake</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Innovation and Entrepreneurship Development Center at IEM Salt Lake, fostering innovation and entrepreneurship since 2014.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              {moreLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Innovation & Research</h3>
            <ul className="grid grid-cols-2 gap-2">
              {innovationLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 IEDC IEM Salt Lake. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
