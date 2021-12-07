import { useCurrentBillsPage } from "./logic";
import { CurrentBillsTemplate } from "./template";

export default (): JSX.Element => {
  const logic = useCurrentBillsPage();
  return <CurrentBillsTemplate {...logic} />;
};
