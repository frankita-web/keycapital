import { ContactoPage } from "@/components/pages/contacto";
import { metaPagina } from "@/lib/i18n";

export const metadata = metaPagina("es", "contacto");

export default function Page() {
  return <ContactoPage idioma="es" />;
}
