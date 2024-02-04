export const mergeSubCategories = (CATEGORIESDATA, subCategoriesData) => {
  const mergedData = CATEGORIESDATA.map((category) => {
    const matchingSubcategory = subCategoriesData.find(
      (subcategory) => subcategory.id === category.id
    );
    if (matchingSubcategory) {
      return {
        ...category,
        subcategories: matchingSubcategory.subcategories,
      };
    }

    return category;
  });

  return mergedData;
};
