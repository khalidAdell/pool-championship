import { Locale } from "../../../../i18n.config";
import { getDictionary } from "../../../../lib/dictionary";
import ContactPage from "../components/contact/Contact";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const { page } = await getDictionary(lang);

  return <ContactPage page={page} lang={lang} />;
}
