// components/ui/Footer.tsx

import Link from "next/link";
import { Instagram, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">claude builder club</h3>
            <p className="text-gray-400 text-sm">
              Building with AI at UC Irvine
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">explore</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-white transition-colors"
                >
                  events
                </Link>
              </li>
              <li>
                <Link
                  href="/hackathon"
                  className="hover:text-white transition-colors"
                >
                  hackathon
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-white transition-colors"
                >
                  team
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold">connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/signup"
                  className="hover:text-white transition-colors"
                >
                  join us
                </Link>
              </li>
              <li>
                <a
                  href="https://instagram.com/claudebuildersuci"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  instagram
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">follow us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/claudebuildersuci"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#da7756] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="hover:text-[#da7756] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Claude Builder Club @ UC Irvine. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
