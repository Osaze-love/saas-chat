import { authOptions } from "@/auth";
import ChatInput from "@/components/ChatInput";
import ChatMembersBadges from "@/components/ChatMembersBadges";
import ChatMessages from "@/components/ChatMessages";
import { sortedMessagesRef } from "@/lib/converters/Message";
import { getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";

type Props = {
  params: {
    chatId: string;
  };
};

const ChatPage = async ({ params: { chatId } }: Props) => {
  const session = await getServerSession(authOptions);
  const InitialMessages = (await getDocs(sortedMessagesRef(chatId))).docs.map(
    (doc) => doc.data()
  );

  return (
    <>
      <div className="flex-1">
        <ChatMembersBadges chatId={chatId} />
        <ChatMessages
          chatId={chatId}
          session={session}
          initialMessages={InitialMessages}
        />
      </div>
      <ChatInput chatId={chatId} />
    </>
  );
};

export default ChatPage;
