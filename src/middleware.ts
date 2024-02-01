import { i18nConfig } from "@/infrastructure/config/i18n/i18nConfig";
import { i18nRouter } from "next-i18n-router";
import { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  return i18nRouter(request, i18nConfig);
};

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
