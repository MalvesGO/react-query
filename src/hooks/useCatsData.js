import { useQuery } from "@tanstack/react-query";

const fetchData = async() => {
    const response = await fetch("https://api.thecatapi.com/v1/breeds");
    return response.json();
};

export function useCatsData() {
    const query = useQuery({
        queryKey: ["cats-data"],
        queryFn: fetchData,
    });
    return query;
}
