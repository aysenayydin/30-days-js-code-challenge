//asc:boolean value (asc=true => ascending, asc=false =>descending)

function sortArr(arr, asc) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (asc) {
        if (arr[j] < arr[i]) {  // kücükten büyüge sıralama
          let ascend = arr[i];
          arr[i] = arr[j];
          arr[j] = ascend;
        }
      } else {
        if (arr[j] > arr[i]) { // büyükten küçüğe sıralama
          let descend = arr[i];
          arr[i] = arr[j];
          arr[j] = descend;
        }
      }
    }
  }

  return arr;
}

//[12,5,94] olsun.