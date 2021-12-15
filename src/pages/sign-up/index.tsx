import { useSignUpPage } from "./logic";
import { SignUpTemplate } from "./template";

export default (): JSX.Element => {
  const logic = useSignUpPage();
  return <SignUpTemplate {...logic} />;
};
