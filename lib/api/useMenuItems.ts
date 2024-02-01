import { useQuery } from "@tanstack/react-query";

export function useMenuItems() {
  return useQuery({
    queryKey: ["menuItems"],
    queryFn: async () =>
      fetch("http://localhost:4000/menu").then((res) => res.json()),
  });
}
