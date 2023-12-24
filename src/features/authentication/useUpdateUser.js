import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: ({ fullName, avatar, password }) =>
      updateCurrentUser({ fullName, avatar, password }),
    onSuccess: (data) => {
      toast.success("updated successfully");
      queryClient.setQueryData(["user"], data?.user);
      //queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => toast.error(error.message),
  });
  return { isUpdating, updateUser };
};

export default useUpdateUser;
