import useInterests from "@/hooks/useInterest";

const Interest = () => {
  const { data, isError, error } = useInterests();
  if (isError) {
    console.error(error);
  }

  return JSON.stringify(data, null, 2);
};

export default Interest;
