import { User } from "@/types";
import { getUser } from "@/utils/api";
import { useEffect, useState } from "react";

export default function useGetUser() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const dbUser = await getUser();
      setUser(dbUser);
      setLoading(false);
    }

    fetchData();
  }, []);

  return {
    user,
    setUser,
    isUserLoading: loading,
  };
}
