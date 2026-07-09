import { useState, useEffect } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

type Heading = {
  id: string;
  title: string;
};

type Props = {
  headings: Heading[];
};

export function SidebarScrollspy({ headings }: Props) {
  const [activeSection, setActiveSection] = useState(headings[0]?.id || "");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset for fixed header
      for (let i = headings.length - 1; i >= 0; i--) {
        const section = headings[i];
        const element = document.getElementById(section.id);
        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          if (elementTop <= scrollPosition) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      // scroll to element considering a top offset
      const y = element.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top: y, behavior: 'smooth' });
      history.pushState(null, "", `#${id}`);
    }
  };

  const activeHeadingTitle = headings.find(h => h.id === activeSection)?.title || "Select section";

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="lg:w-1/4 shrink-0 hidden lg:block sticky top-28 self-start z-20">
        <div className="bg-white rounded-3xl p-3 border border-line-100 shadow-sm">
          <nav className="space-y-1">
            {headings.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm font-bold rounded-2xl transition-all text-left ${
                    isActive
                      ? "bg-razzia-50 text-razzia-600 shadow-sm"
                      : "text-smoke-600 hover:bg-surface-50 hover:text-smoke-900"
                  }`}
                >
                  <span className="truncate pr-4">{section.title}</span>
                  {isActive && <ChevronRight size={16} className="text-razzia-400 shrink-0" />}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile Dropdown */}
      <div className="lg:hidden sticky top-20 z-40 mb-8">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-line-100 shadow-sm relative">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full flex items-center justify-between p-4 font-bold text-smoke-900 outline-none"
          >
            <span className="flex items-center gap-2 truncate">
              <span className="text-razzia-500 text-sm font-semibold shrink-0">Jump to:</span> 
              <span className="truncate">{activeHeadingTitle}</span>
            </span>
            <ChevronDown size={20} className={`text-smoke-400 transition-transform duration-300 shrink-0 ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isMobileMenuOpen && (
            <div className="absolute top-[110%] left-0 right-0 bg-white rounded-2xl border border-line-100 shadow-xl p-2 max-h-[60vh] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
              <nav className="space-y-1">
                {headings.map(section => {
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => {
                        scrollToSection(section.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm font-bold rounded-xl transition-all text-left ${
                        isActive
                          ? "bg-razzia-50 text-razzia-600"
                          : "text-smoke-600 hover:bg-surface-50 hover:text-smoke-900"
                      }`}
                    >
                      <span className="truncate pr-4">{section.title}</span>
                      {isActive && <ChevronRight size={16} className="text-razzia-400 shrink-0" />}
                    </button>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
