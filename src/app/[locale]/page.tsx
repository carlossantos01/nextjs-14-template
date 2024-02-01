import AccountModal from "@/components/common/account-modal";
import TranslationsProvider from "@/components/common/translations-provider";
import { Params } from "@/domain/model/params";
import initTranslations from "@/infrastructure/config/i18n/i18nConfig";

interface HomeProps {
  params: Params;
}

const i18nNamespaces = ["home"];

const Home: React.FC<HomeProps> = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <AccountModal />
      </main>
    </TranslationsProvider>
  );
};

export default Home;
