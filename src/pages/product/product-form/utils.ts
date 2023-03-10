export const formatDataToOptionShape = (array: (string | number)[]) => array.map((item, index) => ({ key: String(index), content: String(item) }))