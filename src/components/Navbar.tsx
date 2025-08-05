"use client";
import { useState, useEffect, useRef } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";
import { useTheme } from "./ThemeContext";
import {
  Moon,
  Sun,
  Pencil,
  ChevronDown,
  Menu,
  X,
  User,
  LogOut,
  Home,
  BookOpen,
  Bookmark,
  Video,
  MessageSquare,
  BarChart,
} from "lucide-react";

interface NavItemProps {
  href: string;
  theme: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  mobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  theme,
  icon,
  children,
  onClick,
  mobile = false,
}) => (
  <li className="list-none">
    <Link
      href={href}
      onClick={onClick}
      className={`relative flex items-center py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 group gradient-hover ${
        theme === "light"
          ? "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
          : "text-gray-200 hover:bg-indigo-900/20 hover:text-indigo-300"
      } ${mobile ? "w-full" : ""}`}
    >
      <span className="mr-2">{icon}</span>
      {children}
    </Link>
  </li>
);

 const menuItems = [
    { href: "/", icon: <Home size={18} />, label: "Home" },
    { href: "/summaries", icon: <BookOpen size={18} />, label: " Some Book Summaries" },
    { href: "/summarizebook", icon: <Bookmark size={18} />, label: "Any Book Summary" },

  ];

const Navbar: React.FC = () => {
  const { data: session, status } = useSession();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(".mobile-menu-toggle")
      ) {
        setNavOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    toast.success("Signed out successfully", { duration: 2000 });
    await signOut({ callbackUrl: "/" });
    localStorage.setItem("isFirstVisit", "true");
    setNavOpen(false);
  };

  const ThemeToggleButton = ({ mobile = false }: { mobile?: boolean }) => (
    <button
      onClick={toggleTheme}
      className={`relative flex items-center justify-start ${
        mobile ? "w-full" : "w-auto"
      } px-3 py-2 rounded-lg transition-all duration-300 group text-sm font-medium ${
        theme === "light"
          ? "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
          : "text-gray-200 hover:bg-indigo-900/20 hover:text-indigo-300"
      }`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span className="relative w-6 h-6 flex items-center justify-center mr-2">
        <Moon
          size={20}
          className={`absolute transition-opacity duration-300 ${
            theme === "light" ? "opacity-100" : "opacity-0"
          }`}
        />
        <Sun
          size={20}
          className={`absolute transition-opacity duration-300 ${
            theme === "light" ? "opacity-0" : "opacity-100"
          }`}
        />
      </span>
      {mobile && <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>}
      {!mobile && (
        <span
          className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
            theme === "light"
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-gray-900"
          }`}
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </span>
      )}
    </button>
  );

  return (
    <>
      <Toaster position="top-right" />
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          theme === "light"
            ? "bg-white/80 backdrop-blur-md border-gray-100"
            : "bg-gray-900/80 backdrop-blur-md border-gray-800"
        } ${scrolled ? "shadow-lg" : "shadow-none"}`}
      >
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex items-center justify-between h-16">
    <Link
      href="/"
      className="flex items-center space-x-3 transition-opacity duration-200 hover:opacity-80"
      onClick={() => setNavOpen(false)}
    >
      {/* Logo */}
      <div className="relative">
        <img
          src="/Smart-logo.png"
          alt="SmartBriefs Logo"
         className={`h-10 w-10 rounded-md shadow-sm transition-transform duration-200 hover:scale-110 hover:opacity-90 transform ${
  theme === "dark"
    ? "bg-gray-800 border border-gray-700"
    : "bg-white border border-gray-200"
}`}

        />
      </div>

      {/* Brand Name */}
      <div className="flex items-center">
         <span className="text-2xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-purple-800 dark:from-purple-300 dark:to-purple-500 bg-clip-text text-transparent transition-all duration-300">
            Smart
          </span>
          <span className="text-gray-900 dark:text-white ml-1 transition-colors duration-300">
            Briefs
          </span>
        </span>

      </div>
    </Link>

    {/* Desktop Navigation */}
    <div className="hidden lg:flex items-center space-x-1">
      <ul className="flex flex-row space-x-1 list-none">
        {menuItems.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            theme={theme}
            icon={item.icon}
          >
            {item.label}
          </NavItem>
        ))}
        <li className="list-none ml-4">
          <ThemeToggleButton />
        </li>
      </ul>
    </div>

    {/* Right Side */}
    <div className="flex items-center space-x-3">
      {status === "authenticated" ? (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-200 ${
              theme === "light" 
                ? "hover:bg-gray-100 border border-gray-200" 
                : "hover:bg-gray-700 border border-gray-600"
            }`}
            aria-expanded={isDropdownOpen}
            aria-label="User menu"
          >
            {session.user?.image ? (
              <img
                src={session.user?.image}
                alt="User"
                className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600"
              />
            ) : (
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  theme === "light" ? "bg-gray-100" : "bg-gray-700"
                }`}
              >
                <User size={16} className={theme === "light" ? "text-gray-600" : "text-gray-300"} />
              </div>
            )}
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              } ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}
            />
          </button>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div
              className={`absolute right-0 mt-2 w-56 rounded-lg shadow-lg border ${
                theme === "light" 
                  ? "bg-white border-gray-200" 
                  : "bg-gray-800 border-gray-600"
              } z-50`}
            >
              <div className={`p-4 border-b ${
                theme === "light" ? "border-gray-200" : "border-gray-600"
              }`}>
                <p className={`font-medium text-sm truncate ${
                  theme === "light" ? "text-gray-900" : "text-gray-100"
                }`}>
                  {session.user?.name}
                </p>
                <p className={`text-xs truncate ${
                  theme === "light" ? "text-gray-500" : "text-gray-400"
                }`}>
                  {session.user?.email}
                </p>
              </div>
              <ul className="py-1 list-none">
                <li>
                  <Link
                    href="/dashboard"
                    className={`flex items-center px-4 py-2 text-sm transition-colors duration-200 ${
                      theme === "light" 
                        ? "text-gray-700 hover:bg-gray-50" 
                        : "text-gray-200 hover:bg-gray-700"
                    }`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <Bookmark size={16} className="mr-3" />
                    My Reading List
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className={`flex items-center px-4 py-2 text-sm transition-colors duration-200 ${
                      theme === "light" 
                        ? "text-gray-700 hover:bg-gray-50" 
                        : "text-gray-200 hover:bg-gray-700"
                    }`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <User size={16} className="mr-3" />
                    Premium member
                  </Link>
                </li>
                <li className={`border-t ${
                  theme === "light" ? "border-gray-200" : "border-gray-600"
                } mt-1 pt-1`}>
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 transition-colors duration-200"
                  >
                    <LogOut size={16} className="mr-3" />
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <Link
          href="/signin"
          className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
            theme === "light"
              ? "bg-blue-600 text-white hover:bg-blue-700 border border-blue-600"
              : "bg-blue-500 text-white hover:bg-blue-600 border border-blue-500"
          }`}
          onClick={() => setNavOpen(false)}
        >
          <User size={16} className="mr-2" />
          Sign In
        </Link>
      )}

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setNavOpen(!isNavOpen)}
        className={`lg:hidden p-2 rounded-md transition-colors duration-200 ${
          theme === "light" 
            ? "text-gray-600 hover:bg-gray-100 border border-gray-200" 
            : "text-gray-300 hover:bg-gray-700 border border-gray-600"
        }`}
        aria-label={isNavOpen ? "Close menu" : "Open menu"}
      >
        {isNavOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  </div>

  {/* Mobile Nav */}
  {isNavOpen && (
    <div className="lg:hidden mt-2">
      <div
        className={`rounded-lg shadow-lg border ${
          theme === "light" 
            ? "bg-white border-gray-200" 
            : "bg-gray-800 border-gray-600"
        }`}
      >
        <ul className="py-2 list-none">
          {menuItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              theme={theme}
              icon={item.icon}
              onClick={() => setNavOpen(false)}
            >
              {item.label}
            </NavItem>
          ))}
          <li className="px-4 py-2 border-t border-gray-200 dark:border-gray-600 mt-2 pt-3">
            <ThemeToggleButton mobile />
          </li>
          {status === "authenticated" && (
            <>
              <li className="border-t border-gray-200 dark:border-gray-600 mt-2">
                <NavItem
                  href="/dashboard"
                  theme={theme}
                  icon={<Bookmark size={18} />}
                  onClick={() => setNavOpen(false)}
                >
                  My Reading List
                </NavItem>
              </li>
              <li>
                <NavItem
                  href="/profile"
                  theme={theme}
                  icon={<User size={18} />}
                  onClick={() => setNavOpen(false)}
                >
                  Profile
                </NavItem>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className={`flex items-center w-full px-4 py-3 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200`}
                >
                  <LogOut size={18} className="mr-3" />
                  Sign out
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )}
</div>
      </nav>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
        .gradient-hover {
          position: relative;
          overflow: hidden;
        }
        .gradient-hover::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, #0891b2, #0286a3);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }
        .gradient-hover:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      `}</style>
    </>
  );
};

export default Navbar;