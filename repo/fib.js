var fib = (n) => {
  const obj = {
    msg: "Invalid number",
    arr: [0, 1],
  }
  if (n < 0) {
    let {msg} = obj;
    document.getElementById("result").innerHTML = msg;
  } else {
    let {arr} = obj;
    for (let i = 2; i < n + 1; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
    document.getElementById("result").innerHTML = arr;
    document.getElementsByName("fibnum")[0].value = "";
  }
}
