import Button from '@mui/material/Button';
import SelectAlgorithm from './Select';

const PrimaryButton = ({ algorithm, array, setArray, buttonVariant, buttonColor, buttonText }) => {


    const algorithmSelector = (algorithm) => {
        console.log(algorithm);
        switch (algorithm[0]){
            case 1:
                bubbleSort(array);
                break;
            case 2:
                mergeSort(array);
                break;
            case 3: 
                quickSort(array);
                break;
        }
    }


    const bubbleSort = async (arr, delay = 200) => {
        let n = arr.length;
        let swapped;

        for (let i = 0; i < n - 1; i++) {
            swapped = false;

            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }

            if (!swapped) {
                break;
            }
        
            setArray([...arr]);

            await new Promise(resolve => setTimeout(resolve, delay));
        }
       
    };

    const quickSort = async (arr, delay = 200, start = 0, end = arr.length - 1) => {
        if (start >= end) return;
    
        const partition = async (arr, start, end) => {
            let pivot = arr[end];
            let i = start - 1;
    
            for (let j = start; j < end; j++) {
                if (arr[j] < pivot) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
    
            [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    
            setArray([...arr]);
            await new Promise(resolve => setTimeout(resolve, delay));
            return i + 1;
        };
    
        let index = await partition(arr, start, end);
    
        await quickSort(arr, delay, start, index - 1);
        await quickSort(arr, delay, index + 1, end);
    };

    const mergeSort = async (arr, delay = 200, left = 0, right = arr.length - 1) => {
        if (left >= right) return;
    
        const merge = async (arr, left, mid, right) => {
            let n1 = mid - left + 1;
            let n2 = right - mid;
    
            let L = arr.slice(left, mid + 1);
            let R = arr.slice(mid + 1, right + 1);
    
            let i = 0, j = 0, k = left;
    
            while (i < n1 && j < n2) {
                if (L[i] <= R[j]) {
                    arr[k] = L[i];
                    i++;
                } else {
                    arr[k] = R[j];
                    j++;
                }
                k++;
            }
    
            while (i < n1) {
                arr[k] = L[i];
                i++;
                k++;
            }
    
            while (j < n2) {
                arr[k] = R[j];
                j++;
                k++;
            }
    
            setArray([...arr]);
            await new Promise(resolve => setTimeout(resolve, delay));
        };
    
        let mid = Math.floor((left + right) / 2);
        await mergeSort(arr, delay, left, mid);
        await mergeSort(arr, delay, mid + 1, right);
        await merge(arr, left, mid, right);
    };
    
    

    return (
        <Button
            sx={{
                background: '#006193',
                color: '#ccffff',
                height: '40px',
                borderRadius: '0px'
            }}
            variant={buttonVariant}
            color={buttonColor}
            onClick={() => algorithmSelector([algorithm])}
        >
            {buttonText}
        </Button>
    );
};

export default PrimaryButton;
