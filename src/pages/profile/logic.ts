import { useState } from "react";

import { useSignOut } from "~auth";
import { ProfileTemplateProps } from "./template";

export const useProfilePage = (): ProfileTemplateProps => {
  const signOutFunction = useSignOut();

  const [loading, setLoading] = useState<boolean>(false);

  const signOut = async () => {
    try {
      setLoading(true);
      await signOutFunction();
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    signOut,
    loading,
  };
};
