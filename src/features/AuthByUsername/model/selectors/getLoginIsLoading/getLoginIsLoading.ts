import { StateShema } from "app/providers/StoreProvider";

export const getLoginIsLoading = (state:StateShema) => state.login?.isLoading || false