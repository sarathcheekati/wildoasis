import { useMutation } from "@tanstack/react-query";
import { signUp as signupApi } from "../../services/apiAuth";

const useSignup = () => {
  const { mutate: signup, isLoading } = useMutation({ mutationFn: signupApi });
  return { signup, isLoading };
};

export default useSignup;
