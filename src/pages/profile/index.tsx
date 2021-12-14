import { useProfilePage } from "./logic";
import { ProfileTemplate } from "./template";

export default (): JSX.Element => {
  const logic = useProfilePage();
  return <ProfileTemplate {...logic} />;
};
