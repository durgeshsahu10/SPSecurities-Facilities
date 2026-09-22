import knightFrank from "@/assets/clients/knight-frank.svg";
import jll from "@/assets/clients/jll.svg";
import panchshil from "@/assets/clients/panchshil.jpg";
import riverdale from "@/assets/clients/riverdale.png";
import nyati from "@/assets/clients/nyati.jpg";
import verde from "@/assets/clients/verde.png";
import { SectionHeading } from "@/components/page-hero";

// Client logos are local SVG files in src/assets/clients/ so they are
// bundled with the site and always display. To replace one, overwrite the
// matching .svg file (keep the same filename) or drop a new file in
// public/clients/ and point `logo` at "/clients/<file>".
const clients = [
  { name: "Knight Frank (India) Pvt. Ltd.", logo: knightFrank },
  { name: "JLL Property Management", logo: jll },
  { name: "Panchshil Towers", logo: panchshil },
  { name: "Riverdale Heights", logo: riverdale },
  { name: "Nyati Group", logo: nyati },
  { name: "Verde Society, Kalyani Nagar", logo: verde },
];

export function ClientShowcase() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading
          eyebrow="Trusted partnerships"
          title="Our valued clients"
          description="Proud to support respected property managers, developers and residential communities."
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex min-h-44 flex-col items-center justify-center bg-card p-6 text-center"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                loading="lazy"
                className="h-16 w-full object-contain md:h-20"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <p className="mt-4 text-sm font-semibold text-ink">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
