"use cache";

import { unstable_cacheLife as cacheLife } from "next/cache";
import Link from "next/link";

const Footer = async () => {
  cacheLife("days");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-4 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="mb-2">
            &copy; {currentYear}{" "}
            <Link
              href="https://akhilaariyachandra.com"
              className="transition-colors hover:text-neutral-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Akhila Ariyachandra
            </Link>
            . All rights reserved.
          </p>
          <Link
            href="https://github.com/akhila-ariyachandra/movie-database-ppr"
            className="text-blue-400 transition-colors hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
