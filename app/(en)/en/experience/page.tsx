import { ExperienciaPage } from "@/components/pages/experiencia";
import { metaPagina } from "@/lib/i18n";

export const metadata = metaPagina("en", "experiencia");

export default function Page() {
  return <ExperienciaPage idioma="en" />;
}
