
function clearscreen()
{
    document.getElementById("res").value = " ";
}
function display(value)
{
    document.getElementById("res").value += value;
}
function calculate()
{
   var x = document.getElementById("res").value;
   var y = eval(x)
    document.getElementById("res").value = y;
}
