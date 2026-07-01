import { BookOpen, Map, Medal, Settings } from "lucide-react";

const navItems = [
  { icon: Map, label: "Mapa", active: false },
  { icon: BookOpen, label: "Kronika", active: true },
  { icon: Medal, label: "Osiągnięcia", active: false },
  { icon: Settings, label: "Ustawienia", active: false },
] as const;

export function BottomNav() {
  return (
    <nav
      className="flex shrink-0 items-center justify-around bg-[#5D2E17] px-4 py-3"
      aria-label="Nawigacja"
    >
      {navItems.map(({ icon: Icon, label, active }) => (
        <button
          key={label}
          type="button"
          aria-label={label}
          aria-current={active ? "page" : undefined}
          className={`flex items-center justify-center rounded-lg p-2 transition ${
            active
              ? "bg-[#D4AF37] text-[#5D2E17]"
              : "text-[#D4AF37]/80 hover:text-[#D4AF37]"
          }`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        </button>
      ))}
    </nav>
  );
}
