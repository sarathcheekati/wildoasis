import supabase from "./supabase";

export const getCabins = async () => {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins couldn't be loaded");
  }

  return data;
};

export const deleteCabin = async (id) => {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabins couldn't be deleted");
  }
};

export const createCabin = async (newCabin) => {
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Cabins couldn't be created");
  }
  return data;
};
