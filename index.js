const form = document.getElementById("loveForm");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const checkedBoxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  if (checkedBoxes.length === 0) {
    output.textContent = "Please select at least one language.";
    return;
  }

  const languages = Array.from(checkedBoxes)
    .map(box => box.value)
    .join(" and ");

  output.textContent = `My name is ${name} and I love ${languages}`;
});
