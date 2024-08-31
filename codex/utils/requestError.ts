import { AuthError, PostgrestError } from "@supabase/supabase-js";
import { encodedRedirect } from "./utils";

export default function handleRequestError(type: "error" | "success", path: string, message: string, error: AuthError | PostgrestError ){
    console.error(
        `${message}: ${error?.code} ${error?.message}`,
      );
      return encodedRedirect(type, path, message);
}