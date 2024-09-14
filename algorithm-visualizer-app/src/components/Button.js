import Button from '@mui/material/Button';

const PrimaryButton = ({ array, setArray, buttonVariant, buttonColor, buttonText }) => {

    const bubbleShort = async (arr, delay = 200) => {
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
            onClick={() => bubbleShort([...array])}
        >
            {buttonText}
        </Button>
    );
};

export default PrimaryButton;
