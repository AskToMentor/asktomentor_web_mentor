import ControlPointIcon from '@mui/icons-material/ControlPoint';
import "../MentorDetails/addservices.css"
export default function AddService(){
    return(
        <div className='page'>
        <div className='container'>
          <p className='top-left-text'>Setup services</p>
          <div className='centered-content'>
            <button className='plus-button'><ControlPointIcon/></button>
            <p className='button-text'>Add Service</p>
          </div>
        </div>
      </div>
      
    )
}
