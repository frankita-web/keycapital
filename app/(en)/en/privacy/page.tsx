import { PrivacidadPage } from "@/components/pages/privacidad";
import { metaPagina } from "@/lib/i18n";

export const metadata = metaPagina("en", "privacidad");

export default function Page() {
  return <PrivacidadPage idioma="en" />;
}
