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

export const generateUserName = (email) => {
  const extractBeforeAt = email.substring(0, email.indexOf("@"));
  const userName = `@${extractBeforeAt.slice(0, 6)}${Math.floor(
    Math.random() * (99 - 10 + 10) + 10
  )}`;
  return userName;
};

export const capitalizeFirstLetter = (word) => {
  if (word && typeof word === "string") {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return word;
};
