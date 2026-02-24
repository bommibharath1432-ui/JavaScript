//freqency calcuation
const inputStr = "the quick brown fox jumps over the lazy dog";

function transform(input) {
  const freq = {};

const result=input.replace(/\s/g, "");
  for (const char of result) {
    freq[char] = (freq[char] || 0) + 1;
  }

  return Object.keys(freq)
    .sort()
    .map((ch) => ({ [ch]: freq[ch] }));
}

console.log(transform(inputStr));