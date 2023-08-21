import { StateShema } from "app/providers/StoreProvider";

export const getLoginUsername = (state:StateShema) => state?.login?.username || ''