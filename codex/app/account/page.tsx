import { createClient } from '@/utils/supabase/server';

export default async function Account() {
  const supabase = createClient();
  const { data: account } = await supabase.from("account").select();

  return <pre>{JSON.stringify(account, null, 2)}</pre>
}