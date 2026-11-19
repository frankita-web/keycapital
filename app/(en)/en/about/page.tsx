import { EquipoPage } from "@/components/pages/equipo";
import { metaPagina } from "@/lib/i18n";

export const metadata = metaPagina("en", "equipo");

export default function Page() {
  return <EquipoPage idioma="en" />;
}
