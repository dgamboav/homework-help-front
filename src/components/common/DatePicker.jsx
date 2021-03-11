import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import esLocale from 'date-fns/locale/es';

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = React.useState();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
            <KeyboardDatePicker
                variant="dialog"
                // margin="normal"
                id="date-picker-dialog"
                label="Fecha"
                format="dd/MM/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                fullWidth
            />
        </MuiPickersUtilsProvider>
     );
}
 
export default DatePicker;