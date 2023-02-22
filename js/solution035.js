// P: Receives an array of bits where the total number of bits is always a multiple of 8.
const dataReverse = (data) => {
  const bytes = [];

  // Divide the array into chunks of 8 bits (a byte) and loop over each chunk.
  for (let i = 0; i < data.length; i += 8) {
    // P: Extract the current chunk of 8 bits.
    const chunk = data.slice(i, i + 8);

    // Add the current chunk to the beginning of the bytes array so that last byte is first in an array.
    bytes.unshift(...chunk);
  }

  // R: Returns an array of bits in the reversed order of the original array.
  return bytes;
};
