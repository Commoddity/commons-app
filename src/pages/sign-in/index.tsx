import { useSignInPage } from "./logic";
import { SignInTemplate } from "./template";

export default (): JSX.Element => {
  const logic = useSignInPage();
  return <SignInTemplate {...logic} />;
};
