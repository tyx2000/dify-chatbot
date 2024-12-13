import useSWR from 'swr';

const useMessageId = () => {
  const { data: messageIdFromServer, mutate: setMessageIdFromServer } = useSWR(
    'messageIdFromServer',
    null,
  );

  return { messageIdFromServer, setMessageIdFromServer };
};

export default useMessageId;
