"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Menu, X } from "lucide-react";


const navigation = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Meet the Team", href: "/team" },
  { name: "Hackathon", href: "/hackathon"},
  { name: "About", href: "/about"}
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-3">
            <span className="sr-only">Claude Builder Club @ UCI</span>
            <img
              alt="Claude Builder Club Logo"
              src="/Claude_AI_symbol.svg"
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-gray-900">
              Claude Builder Club @ UCI
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 lg:items-center lg:ml-20">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-900 hover:text-[#c15f3c] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScP9LuFwiHEx806tv9zczjCIEzqO1Zjb-FjB4XWoa6BS1NNKQ/viewform"
            className="rounded-md bg-[#c15f3c] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#a04d2f] transition-colors"
          >
            Join Now
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-3">
              <span className="sr-only">Claude Builder Club @ UCI</span>
              <img
                alt="Claude Builder Club Logo"
                src="/Claude_AI_symbol.svg"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScP9LuFwiHEx806tv9zczjCIEzqO1Zjb-FjB4XWoa6BS1NNKQ/viewform"
                  className="block w-full rounded-md bg-[#c15f3c] px-4 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-[#a04d2f] transition-colors"
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
