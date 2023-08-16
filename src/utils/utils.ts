export function convertToBase64(file: any) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

export const filteredInput = (input) => {
  const newInput = Object.keys(input)
    //Filter Object with key for empty values
    .filter((key) => input[key] !== undefined && input[key])
    .reduce((obj, key) => {
      return Object.assign(obj, {
        [key]: input[key],
      });
    }, {});

  return newInput;
};
