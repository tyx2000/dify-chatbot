import { generateUUID } from '@/lib/utils';
import { cookies } from 'next/headers';

const Page = async () => {
  const id = generateUUID();
  const cookieStore = await cookies();
  const modleIdFromCookie = cookieStore.get('modle-id')?.value;

  const selectedModleId = modles;
};
