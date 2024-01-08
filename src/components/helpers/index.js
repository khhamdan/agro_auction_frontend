/**
 * @dev reads the content of file asynchronously and returns a buffer
 * @param file to read asyn as a buffer
 * @returns buffer content
 */
export function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsArrayBuffer(file);
  });
}
