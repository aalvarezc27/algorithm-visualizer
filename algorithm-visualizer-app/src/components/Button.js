import Button from '@mui/material/Button';
import { fontFamily } from '@mui/system';

const PrimaryButton = (props) =>{
    return(
        <Button sx={
            {
                background:'#006193',
                color:'#ccffff',
                fontFamily: 'inherit',
                height:'40px',
                borderRadius:'0px'
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