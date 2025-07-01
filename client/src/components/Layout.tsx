import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-iedc-light-gray">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
