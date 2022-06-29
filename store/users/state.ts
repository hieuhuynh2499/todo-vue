import { UserState } from "~/models/user.state";

export const initState = (): UserState => ({
  users: [],
});

export default initState;