import { MediosPage } from "@/components/pages/medios";
import { metaPagina } from "@/lib/i18n";

export const metadata = metaPagina("en", "medios");

export default function Page() {
  return <MediosPage idioma="en" />;
}
