import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import CompleteRegistration from '@/components/CompleteRegistration';
import { Message } from '@/components/forms/form-message';

export default async function ProtectedPage({
  searchParams,
}: {
  searchParams: Message;
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/login');
  }
  const { data: accountData, error } = await supabase
    .from('accounts')
    .select('*')
    .eq('auth_id', user.id)
    .maybeSingle();
  if (error) {
    console.error(
      'Error quering account data:' + error?.code + ' ' + error?.message,
    );
  }
  if (accountData.filled_registration === false)
    return (
      <CompleteRegistration
        searchParams={searchParams}
        accountId={accountData.id}
      />
    );
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <div className="flex max-w-4xl flex-1 flex-col gap-20 px-3">
        <main className="flex flex-1 flex-col gap-6">
          <h2 className="mb-4 text-2xl font-bold">Em desenvolvimento! 😅</h2>
        </main>
      </div>
    </div>
  );
}
