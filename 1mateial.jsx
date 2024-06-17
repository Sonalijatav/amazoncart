import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';

export default function  MaterialUI() {
  let handleClick = () =>{
    console.log("Button was clicked");
  }

  return (
    <>
    <h1>Material UI Demo</h1>
      <Button variant="contained" startIcon={<DeleteIcon />} onClick={handleClick}>Delete</Button>

      <Alert severity="error">Delete option is given!</Alert>

      <Button variant="contained" color="success" size="large" 
       onClick={handleClick}>
        Click me!
        </Button>
       
    </>
  )
}

