/**
 * Modify the getDayType function to achieve runtime AND compiletime safety for invalid value or unimplemented cases
 *
 * Test your function to be able to handle: Invalid inputs e.g. "asd" as any, expanding Day type with a new,
 * functional Day to check compiletime safety
 */

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
    }
}

export {}
