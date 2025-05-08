import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Search, ShoppingCart, User } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="TotalEnergies Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-lg font-bold text-[#E30613]">
                TotalEnergies
              </span>
            </Link>
            <nav className="hidden md:flex gap-6 ml-6">
              <Link
                href="/products/gas"
                className="text-sm font-medium hover:text-[#E30613] transition-colors"
              >
                Gas
              </Link>
              <Link
                href="/products/lubricants"
                className="text-sm font-medium hover:text-[#E30613] transition-colors"
              >
                Lubricants
              </Link>
              <Link
                href="/products/excellium"
                className="text-sm font-medium hover:text-[#E30613] transition-colors"
              >
                Excellium Energy
              </Link>
              <Link
                href="/branches"
                className="text-sm font-medium hover:text-[#E30613] transition-colors"
              >
                Branches
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-[#E30613] transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <form className="hidden md:flex relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 w-[200px] lg:w-[300px]"
              />
            </form>
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#E30613] text-[10px] font-medium text-white">
                0
              </span>
              <span className="sr-only">Shopping Cart</span>
            </Link>
            <Link href="/account">
              <User className="h-6 w-6" />
              <span className="sr-only">Account</span>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#004C74]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                    Energy is Life. Let's Make it Better.
                  </h1>
                  <p className="max-w-[600px] text-white md:text-xl">
                    Discover our range of energy solutions for your home and
                    business needs in Uganda.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-[#E30613] hover:bg-[#c00510] text-white">
                    Explore Products
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#004C74]"
                  >
                    Find a Branch
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  alt="TotalEnergies Products"
                  width={550}
                  height={550}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Products
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our range of high-quality energy solutions for all
                  your needs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Gas Product Card */}
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FFCD00] text-white">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Gas Icon"
                    width={80}
                    height={80}
                    className="h-12 w-12"
                  />
                </div>
                <h3 className="text-xl font-bold">Gas</h3>
                <p className="text-center text-gray-500">
                  High-quality cooking gas for homes and businesses.
                </p>
                <Link
                  href="/products/gas"
                  className="inline-flex items-center text-[#E30613] hover:underline"
                >
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Lubricants Product Card */}
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#97D700] text-white">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Lubricants Icon"
                    width={80}
                    height={80}
                    className="h-12 w-12"
                  />
                </div>
                <h3 className="text-xl font-bold">Lubricants</h3>
                <p className="text-center text-gray-500">
                  Premium lubricants for all types of vehicles and machinery.
                </p>
                <Link
                  href="/products/lubricants"
                  className="inline-flex items-center text-[#E30613] hover:underline"
                >
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Excellium Energy Product Card */}
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#004C74] text-white">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Excellium Icon"
                    width={80}
                    height={80}
                    className="h-12 w-12"
                  />
                </div>
                <h3 className="text-xl font-bold">Excellium Energy</h3>
                <p className="text-center text-gray-500">
                  Advanced fuel technology for better performance and
                  efficiency.
                </p>
                <Link
                  href="/products/excellium"
                  className="inline-flex items-center text-[#E30613] hover:underline"
                >
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Why Choose TotalEnergies
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are committed to providing reliable energy solutions across
                  Uganda.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E30613] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Quality Assurance</h3>
                <p className="text-center text-gray-500">
                  All our products meet international quality standards.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#004C74] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Nationwide Presence</h3>
                <p className="text-center text-gray-500">
                  With branches across Uganda, we're always close to you.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#97D700] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Customer Satisfaction</h3>
                <p className="text-center text-gray-500">
                  We prioritize your needs and provide excellent service.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFCD00] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Sustainability</h3>
                <p className="text-center text-gray-500">
                  Committed to environmentally responsible energy solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-[#004C74] text-white">
        <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="TotalEnergies Logo"
              width={32}
              height={32}
              className="h-6 w-6"
            />
            <p className="text-center text-sm leading-loose md:text-left">
              &copy; 2025 TotalEnergies Uganda. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
