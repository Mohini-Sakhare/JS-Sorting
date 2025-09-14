function bubblesort(arr, n){
    let i,j,temp;
    let swapped;
    for(i=0; i<n-1; i++){
        swapped = false;
        for(j=0; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]= temp;
                swapped= true;
            }
        }
        if(swapped==false)
            break;
    }
}

function printArray(arr, size){
    let i;
    for(i=0; i<size; i++)
        console.log(arr[i]+" ");
}
let arr=[64, 34, 25,12, 22, 11, 90];
let n=arr.length;
bubblesort(arr, n);
console.log("Sorted array:");
printArray(arr, n);