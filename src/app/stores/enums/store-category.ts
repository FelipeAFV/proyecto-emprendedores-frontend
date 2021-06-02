

export enum StoreCategory {
    CLOTHES = 'CLOTHES',
    HOME = 'HOME',
    GENERAL = 'GENERAL',
    ELECTRONICS = 'ELECTRONICS',
    TOYS = 'TOYS'
}

export function getAppCategorySpec(category: StoreCategory) {
    switch (category) {
        case StoreCategory.CLOTHES:
            return { value: StoreCategory.CLOTHES, presentableName: 'Vestimenta'}
            break;
        case StoreCategory.ELECTRONICS:
            return { value: StoreCategory.ELECTRONICS, presentableName: 'Electronica'}
            break;
        case StoreCategory.GENERAL:
            return { value: StoreCategory.GENERAL, presentableName: 'General'}
            break;
        case StoreCategory.HOME:
            return { value: StoreCategory.HOME, presentableName: 'Hogar'}
            break;
        case StoreCategory.TOYS:
            return { value: StoreCategory.TOYS, presentableName: 'Jugueteria'}
            break;
    }

}

export function getAllStoreCategories(): StoreCategory[] {
    return [StoreCategory.CLOTHES, StoreCategory.HOME, StoreCategory.GENERAL, StoreCategory.ELECTRONICS, StoreCategory.TOYS]
}
