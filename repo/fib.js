function fib(n) {
  let arr = [0, 1];

  for(var i=2;i<n+1;i++) {
    arr.push(arr[i-2] + arr[i-1]);
  }
  document.getElementById("result").innerHTML = "Result: " + arr;
  document.getElementsByName("fibnum")[0].value="";
}
