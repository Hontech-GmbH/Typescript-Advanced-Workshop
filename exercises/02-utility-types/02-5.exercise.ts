/**
 *  Create or assign a Type for this object that maps features with a boolean
 */

type Features = 'Profile' | 'History' | 'Payment' | 'Archiving'

// Valid Feature Flags
const featureFlags = {
    Profile: true,
    History: false,
    Payment: true,
    Archiving: false
}

// Invalid Feature Flags
const featureFlags1 = {
    Profiles: true,
    History: false,
    SomeOtherPoint: true,
    Archiving: false
}

// Invalid Feature Flags
const featureFlags2 = {
    Profiles: true,
    History: 'false',
    SomeOtherPoint: 33,
    Archiving: false
}


export {}
