import { MenuItemType } from "@/components/Menu/MenuItem";
import { useQuery } from "@tanstack/react-query";

export function useMenuItems() {
  return useQuery({
    queryKey: ["menuItems"],
    queryFn: async () =>
      fetch("https://api.npoint.io/691ffd844371f75b69e4/menu").then((res) =>
        res.json()
      ),
  });
}

export function useMenuItem(itemId: string) {
  return useQuery({
    queryKey: ["menuItem", itemId],
    queryFn: async () => {
      const response = await fetch("http://localhost:4000/menu");
      const data = await response.json();
      return data.find(
        ({ item }: { item: MenuItemType }) => item.id === itemId
      );
    },
  });
}
