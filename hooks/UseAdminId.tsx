"use client";

import { chatMemberAdminRef } from "@/lib/converters/ChatMembers";
import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const UseAdminId = ({ chatId }: { chatId: string }) => {
  const [adminId, setAdminId] = useState<string>("");
  useEffect(() => {
    const fetchAdminStatus = async () => {
      const adminId = (await getDocs(chatMemberAdminRef(chatId))).docs.map(
        (doc) => doc.id
      )[0];

      setAdminId(adminId);
    };
    fetchAdminStatus();
  }, [chatId]);

  return adminId;
};

export default UseAdminId;
