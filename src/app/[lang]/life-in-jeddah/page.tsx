import { Locale } from "../../../../i18n.config";
import { getDictionary } from "../../../../lib/dictionary";
import LifeInJeddahPage from "../components/life-in-jeddah/LifeInJeddah";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const { page } = await getDictionary(lang);

  return <LifeInJeddahPage page={page} lang={lang} />;
}
