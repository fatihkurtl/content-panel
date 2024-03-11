import { ref, reactive } from "vue";

export default function productFilters() {
  const filters = reactive({
    category: ref<string[]>([]),
    brand: ref<string[]>([]),
    stock: reactive<Record<string, boolean>>({
      available: false,
      exhausted: false,
    }),
    status: reactive<Record<string, boolean>>({
      active: false,
      inactive: false,
    }),
  });

  const selectedFilters = (filter: string | boolean, type: string): void => {
    console.log(filter, type);
    if (type === "category") {
      !filters.category.includes(filter as string)
        ? filters.category.push(filter as string)
        : (filters.category = filters.category.filter(
            (item) => item !== filter
          ));
    } else if (type === "brand") {
      !filters.brand.includes(filter as string)
        ? filters.brand.push(filter as string)
        : (filters.brand = filters.brand.filter((item) => item !== filter));
    } else if (filter === "stock" && type === "available") {
      filters.stock.available = !filters.stock.available;
    } else if (filter === "stock" && type === "exhausted") {
      filters.stock.exhausted = !filters.stock.exhausted;
    }
  };

  const stockFilter = (stock: string): void => {
    stock === "available"
      ? (filters.stock.available = !filters.stock.available)
      : (filters.stock.exhausted = !filters.stock.exhausted);
  };

  const statusFilter = (status: string): void => {
    status === "active"
      ? (filters.status.active = !filters.status.active)
      : (filters.status.inActive = !filters.status.inActive);
  };

  return { filters, selectedFilters, stockFilter, statusFilter };
}
