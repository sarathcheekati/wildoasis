import { useSearchParams } from "react-router-dom";
import Select from "./Select";

const SortBy = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = (event) => {
    searchParams.set("sortBy", event.target.value);
    setSearchParams(searchParams);
  };

  const sortBy = searchParams.get("sortBy") || options.at(0).value;

  return (
    <div>
      <Select
        options={options}
        type="white"
        onChange={handleChange}
        value={sortBy}
      />
    </div>
  );
};

export default SortBy;
