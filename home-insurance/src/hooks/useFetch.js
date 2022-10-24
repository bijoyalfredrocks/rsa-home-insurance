import { useQuery } from "react-query";

const fetchData = async ({ queryKey }) => {
  const response = await fetch(queryKey[1]);  
  return await response?.json();
};

const useFetch = (type) => {
  const {REACT_APP_API_URL} = process.env;  
  let url = `${REACT_APP_API_URL}${type}`; 
  const {data, status } = useQuery(["fetchData", url], fetchData);
  return { data, status};
};

export default useFetch;