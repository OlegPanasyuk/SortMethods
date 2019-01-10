var arr = random_arr(10);

document.addEventListener('DOMContentLoaded', function() {
  let st = document.getElementById('start');
  let en = document.getElementById('end');
  st.innerHTML = arr.join();
  en.innerHTML = bubble_sort(arr).join();
});



function random_arr(n) {
  let arr = new Array(n);
  arr.fill(0);
  arr = arr.map((e, i) => {
    return Math.floor(Math.random() * 100);
  })
  return arr;
} 

function swap(arr, lel, rel) {
  let temp = arr[lel];
  arr[lel] = arr[rel];
  arr[rel] = temp;
  console.log(arr, lel, rel);
  return arr;
}

function bubble_sort(arr) {
  let sucsess = false;
  let j = 0;
  do {
    j++;
    console.log('Iteration #',j);
    sucsess = true;
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i+1]) {
        arr = swap(arr, i, i + 1);
        sucsess = false;
      }
    }
    if (sucsess) {
      console.log('Sucsess!');
    }
  }  while (!sucsess);
  return arr;
}