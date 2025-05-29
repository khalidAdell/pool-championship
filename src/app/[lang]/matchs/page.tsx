import { Locale } from "../../../../i18n.config";
import { getDictionary } from "../../../../lib/dictionary";
import MatchsPage from "../components/matchs/Matchs";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const { page } = await getDictionary(lang);

  return <MatchsPage page={page} lang={lang} />;
}
