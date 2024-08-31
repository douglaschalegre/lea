import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import CompleteRegistration from "@/components/CompleteRegistration";
import { Message } from "@/components/forms/form-message";

export default async function ProtectedPage({ searchParams }: { searchParams: Message }) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  const {data: accountData, error} = await supabase.from('accounts').select('*').eq('auth_id', user.id).maybeSingle()
  if (error) {
    console.error("Error quering account data:" + error?.code + " " + error?.message);
  }
  if (accountData.filled_registration === false) return <CompleteRegistration searchParams={searchParams} accountId={accountData.id}/>
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
        <Header />
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-2xl mb-4">Next steps</h2>
        </main>
      </div>
    </div>
  );
}
