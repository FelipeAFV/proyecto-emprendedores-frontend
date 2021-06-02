import { StoreCategory } from "../stores/enums/store-category";
export interface Store {
    name: string,
    category: StoreCategory,
    description: string
}