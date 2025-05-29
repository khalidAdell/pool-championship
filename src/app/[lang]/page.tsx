import { Locale } from "../../../i18n.config";
import { getDictionary } from "../../../lib/dictionary";
import HomePage from "./components/home/Home";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const { page } = await getDictionary(lang);

  return <HomePage page={page} lang={lang} />;
}
