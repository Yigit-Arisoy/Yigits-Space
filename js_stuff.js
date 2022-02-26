function sayHello()
{
  document.write("Hello!");
}


var count = 0;
function increment()
{
  console.log("Increment button was pressed");
  count += 1;
  document.getElementById("increment-value").innerText = count;
}
