import React from "react";

export default function FooterSimple() {

  return (
    <footer className="bg-tower-gray-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-4 pt-4 lg:px-8">
        <div className="border-t border-black dark:border-white/10 pt-4">
          <div className="flex flex-col sm:flex-row">
            <p className="text-xs leading-5 dark:text-gray-200 text-black flex flex-grow">
              &copy; {new Date().getFullYear()} Ayoungh. All rights reserved.
            </p>
            <p className="text-xs leading-5 dark:text-gray-200 text-black flex">
              <a
                className="font-semibold underline-offset-4 transition-colors hover:underline"
                href="https://www.ayoungh.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Anthony Young.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
