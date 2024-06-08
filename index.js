//
const description = document.getElementById("Description");
const category = document.getElementById("Category");
const amount = document.getElementById("amount");
const AddBtn = document.getElementById("Add");
const ExpenseBody = document.getElementById("ExpenseBody");

AddBtn.addEventListener("click", handleadd);
function handleadd() {
  if (description.value && category.value && amount.value) {
    const newE = document.createElement("tr");
    newE.innerHTML = `<td>${category.value}</td>
                <td>${description.value}</td>
                <td>${amount.value}</td>`;
    ExpenseBody.appendChild(newE);
    description.value = "";
    category.value = "";
    amount.value = "";
  } else {
    alert("Fill All the Boxes");
    description.value = "";
    category.value = "";
    amount.value = "";
  }
}
