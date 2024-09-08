import Button from '@mui/material/Button';

const PrimaryButton = (props) =>{
    return(
        <Button sx={
            {
                background:'#006193',
            }
        }
        variant={props.buttonVariant} 
            color={props.buttonColor}
        >
        {props.buttonText}
        </Button>
      )
}

export default PrimaryButton;