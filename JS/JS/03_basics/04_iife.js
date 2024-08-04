// Immediately Invoked Function Expressions

(function code() {
  // This is named IIFE
  console.log(`DB Connected`);
})();

((name) => {
  // This is unnamed IIFE
  console.log(`DB Connected ${name}`);
})("Tuman");
