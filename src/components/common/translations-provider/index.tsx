"use client";

import initTranslations from "@/infrastructure/config/i18n/i18nConfig";
import { Resource, createInstance } from "i18next";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";

interface TranslationsProviderProps {
  children: ReactNode;
  locale: string;
  namespaces: string[];
  resources: Resource;
}

const TranslationsProvider: React.FC<TranslationsProviderProps> = ({
  children,
  locale,
  namespaces,
  resources,
}) => {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationsProvider;
