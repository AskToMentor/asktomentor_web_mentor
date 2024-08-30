import React from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

// Styled Switch using Material UI's styled API
const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  width: 120,  // Increased width to allow more space
  height: 50,  // Height remains the same
  '& .MuiSwitch-track': {
    borderRadius: 25,  // Half of the height for rounded track
    backgroundColor: '#000',  // Black background
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    '&::before': {
      content: '"Mentor"',
      position: 'absolute',
      top: '50%',
      left: 40,  // Adjusted left position to make space for thumb
      transform: 'translateY(-50%)',
      color: '#fff',  // White text color for Mentor
      fontSize: '14px',
      fontWeight: 'bold',
      opacity: 1,
      transition: 'opacity 0.3s',
    },
    '&::after': {
      content: '"Mentee"',
      position: 'absolute',
      top: '50%',
      right: 40,  // Adjusted right position to make space for thumb
      transform: 'translateY(-50%)',
      color: '#fff',  // White text color for Mentee
      fontSize: '14px',
      fontWeight: 'bold',
      opacity: 0,  // Hide Mentee text by default
      transition: 'opacity 0.3s',
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 36,  // Increased thumb size for better visibility
    height: 36,  // Increased thumb size for better visibility
    borderRadius: '50%',  // Circular thumb
    background: 'linear-gradient(to right, #000,#9e9e9e)', // White thumb color by default
    margin: 4,
    transition: 'background-color 0.3s',  // Smooth transition for color change
    zIndex: 1,  // Ensure thumb is above text
  },
  '& .MuiSwitch-switchBase': {
    padding: 4,
    '&.Mui-checked': {
      transform: 'translateX(70px)',  // Adjusted based on the new width
      '& + .MuiSwitch-track': {
        backgroundColor: '#000',  // Ensure track background remains black
        '&::before': {
          opacity: 0,  // Hide Mentor text when checked
        },
        '&::after': {
          opacity: 1,  // Show Mentee text when checked
        },
      },
      '& .MuiSwitch-thumb': {
        background: 'linear-gradient(to right, #000,#9e9e9e)', // White thumb color by default
      },
    },
  },
}));

const MentorMenteeSwitch = ({ onChange }) => {
  return (
    <FormControlLabel
      control={<Android12Switch onChange={onChange} />}
    />
  );
};

export default MentorMenteeSwitch;
