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

export const isServerFile = (path) => {
  return path.startsWith("http://") || path.startsWith("https://");
};

//Ray Casting algorithm to assign pickup requests to riders based on their assigned areas

export const isPointInsidePolygon = (point, polygon) => {
  const x = point[0];
  const y = point[1];
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0];
    const yi = polygon[i][1];
    const xj = polygon[j][0];
    const yj = polygon[j][1];
    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
};
