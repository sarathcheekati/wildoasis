import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useLogin = () => {
  const navigate = useNavigate();

  const {
    data,
    error,
    mutate: login,
    isLoading,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      toast.success(`welcome back ${data.user.email}`);
      navigate("/dashboard");
    },
    onError: (error) => toast.error(error.message),
  });

  return { login, isLoading };
};

export default useLogin;
