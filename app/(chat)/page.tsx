import { models, DEFAULT_MODEL_NAME } from '@/lib/ai/modles';
import { generateUUID } from '@/lib/utils';
import { cookies } from 'next/headers';
import Chat from '@/components/chat';

const Page = async () => {
  const id = generateUUID();
  const cookieStore = await cookies();
  const modleIdFromCookie = cookieStore.get('modle-id')?.value;

  const selectedModleId =
    models.find((model) => model.id === modleIdFromCookie)?.id ||
    DEFAULT_MODEL_NAME;

  return <Chat />;
};
