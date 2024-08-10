type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
type DayType = 'Weekday' | 'Weekend';

function getDayType(day: Day): DayType {
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            return 'Weekday';
        case 'Saturday':
        case 'Sunday':
            return 'Weekend';
        default:
            throw new Error(`${day satisfies never} is invalid`)
    }
}

export {}
