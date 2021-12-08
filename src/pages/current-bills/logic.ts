import { useState } from "react";

import { useGetAllBillsForSessionQuery as useBills } from "~types";
import { CurrentBillsTemplateProps } from "./template";

export const useCurrentBillsPage = (): CurrentBillsTemplateProps => {
  const [parliament, setParliament] = useState<number>(44);
  const [session, setSession] = useState<number>(1);

  const billsResults = useBills({ variables: { parliament, session } });

  console.log(billsResults);

  return { billsResults, parliament, setParliament, session, setSession };
};
