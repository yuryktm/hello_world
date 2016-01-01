//function bubbleSort(arr){
//    draw();
//    console.log(arr);
//    var n = arr.length;
//    for (var i = 0; i < n-1; i++){
//        for (var j = 0; j < n-1-i; j++){
//            drawCheked(j);
//            setInterval(draw, 1000 / 150); //отрисовываем 50 раз за секунду
//            if (arr[j+1] < arr[j]){
//                var t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t;
//            }
//        }
//        console.log(arr);
//    }
//    return arr;
//}
//
//function b2(arr, n, i, j){
//
//    if(j < n-1-i){
//
//        if (arr[j+1] < arr[j]){
//            var t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t;
//        }
//
//        j++;
//        console.log(arr);
//        setTimeout(b2(arr, n, i, j), 500);
//    }
//}
//
//function b1(arr, n, i){
//    var j = 0;
//    setTimeout(b2(arr, n, i, j), 500);
//
//    if(i < n-1){
//        setTimeout(b1(arr, n, i), 500);
//    }
//    i++;
//}
//
//function b3(arr, n, i, j){
//
//
//
//
//    if(j < n-1-i){
//
//        if (arr[j+1] < arr[j]){
//            var t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t;
//        }
//
//        j++;
//        console.log(arr);
//    }else{
//        j=0;
//    }
//
//    if(i < n-1){
//        i++;
//    }
//    setTimeout(b3(arr, n, i, j), 500);
//}
//
//function bubbleSort2(arr){
//    draw();
//    console.log(arr);
//    var n = arr.length;
//    var j= 0;
//    var i = 0;
//
//    setTimeout(b3(arr, n, i, j), 500);
//
//    //for (var i = 0; i < n-1; i++){
//
//    //var j = 0;
//    //setTimeout(b2(arr, n, i, j), 1000);
//
//    //for (var j = 0; j < n-1-i; j++){
//    //   // drawCheked(j);
//    //
//    //    if (arr[j+1] < arr[j]){
//    //        var t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t;
//    //    }
//    //}
//
//    // console.log(arr);
//    // }
//}