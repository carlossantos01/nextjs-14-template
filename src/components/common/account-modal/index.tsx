"use client";
import { useGetAccountQuery } from "@/data/endpoints/accountApi";
import { useAppSelector } from "@/infrastructure/store/hooks";
import { useTranslation } from "react-i18next";

interface AccountModalProps {}

const i18nNamespaces = ["account"];

const AccountModal: React.FC<AccountModalProps> = () => {
  const account = useAppSelector((state) => state.account);
  const { isFetching } = useGetAccountQuery();
  const { t } = useTranslation(i18nNamespaces);

  return (
    !isFetching && <div>{t("welcome", { firstname: account.firstName })}</div>
  );
};

export default AccountModal;
