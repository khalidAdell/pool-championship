import { Locale } from "../../../../i18n.config";
import { getDictionary } from "../../../../lib/dictionary";
import MediaCenterPage from "../components/media-center/MediaCenter";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const { page } = await getDictionary(lang);

  return <MediaCenterPage page={page} lang={lang} />;
}
