import { CatchResponseError } from "@/domain/model/api/apiConfig";
import { UserAccount } from "@/domain/model/user";
import { setAccount } from "@/infrastructure/store/slice/account";
import { api } from "../api/apiConfig";

export const accountApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAccount: builder.query<UserAccount, void>({
      query: () => ({
        method: "GET",
        url: `api/account`,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const user: UserAccount = (await queryFulfilled).data;
          dispatch(setAccount(user));
        } catch (response) {
          const responseError = response as CatchResponseError;
          console.log("Error", responseError.error);
        }
      },
    }),
  }),
});

export const { useGetAccountQuery, useLazyGetAccountQuery } = accountApi;
