import React from 'react';
import {
    Container,
    Box,
    Typography,
    Grid,
    FormControlLabel,
    Button,
    Switch,
    Card,
    CardContent,
}
 from '@mui/material';
import './service-page.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Popup from './summery';
import { useState } from 'react';

const ServicePage = () => {
    const [checked, setChecked] = React.useState(true);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div>
            <Container maxWidth="lg" className="container">
                {/* Main Content */}
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <Card className="card">
                            <CardContent className='card-inside'>
                                <Typography variant="h6" gutterBottom>
                                    Setup Preparing Questionnaires
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    When will you provide your services?*
                                </Typography>
                                <div className='switcher'>
                                    <FormControlLabel className='switch-btn'
                                        control={<Switch checked={checked} onChange={handleChange} />}
                                        label={checked ? "On" : "Off"}
                                    />
                                    <span className='switch-timepicker'><LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['TimePicker']}>
                                            <TimePicker className='time-pick'/>
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    </span>
                                    <span><LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['TimePicker']}>
                                            <TimePicker className='time-pick'/>
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    </span>
                                </div>

                                {/* Days List */}
                                <Grid container spacing={2}>
                                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                                        <Grid item xs={12} key={day} className="day-row">
                                            <FormControlLabel
                                                control={<div className='checkboxes'><input type='checkbox'/></div>}
                                                label={day}
                                                className="checkbox-label"
                                            />

                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer components={['TimePicker']}>
                                                    <TimePicker className='time-pick' />
                                                </DemoContainer>
                                            </LocalizationProvider>
                                            <Typography>-</Typography>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer  components={['TimePicker']}>
                                                    <TimePicker className='time-pick'/>
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </Grid>
                                    ))}
                                </Grid>
                                <Box className="button-container">
                                    <Button onClick={handleOpenPopup} className='forwordbutton'>
                                        <ArrowForwardIosIcon />
                                    </Button>
                                    <Popup open={isPopupOpen} onClose={handleClosePopup}>
                                    </Popup>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Sidebar */}
                    <Grid item xs={3}>
                        <Card className="card">
                            <CardContent>
                                <Typography variant="h6">Service Settings</Typography>
                                <Box mt={2} className="side-card">
                                    <Typography variant="body2">Name: 1to1</Typography>
                                    <Typography variant="body2">Category: Machine Learning</Typography>
                                    <Typography variant="body2">Customer Type: F2F</Typography>
                                    <Typography variant="body2">Pricing: ₹2000-₹2500</Typography>
                                    <Typography variant="body2">Date & Time: All days</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>

    );
}

export default ServicePage;