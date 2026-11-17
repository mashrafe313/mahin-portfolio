
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#E7E0D3] bg-[#F5F1E8]">
      <div className="container-custom flex flex-col justify-between gap-4 py-6 sm:flex-row sm:items-center">
        <Link href="/" className="text-2xl font-bold text-[#344E41]">
          MAHIN<span className="text-[#C65D3A]">.</span>
        </Link>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-[11px] text-[#77776F]">
            © 2026 Mahin Mashrafe. All rights reserved.
          </p>

          <Link
            href="#top"
            className="flex items-center gap-1 text-[11px] font-medium text-[#344E41] transition-colors hover:text-[#C65D3A]"
          >
            Back to top <ArrowUp size={13} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
