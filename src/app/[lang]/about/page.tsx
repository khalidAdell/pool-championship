import { Locale } from "../../../../i18n.config";
import { getDictionary } from "../../../../lib/dictionary";
import AboutPage from "../components/about/About";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const { page } = await getDictionary(lang);

  return <AboutPage page={page} lang={lang} />;
}
