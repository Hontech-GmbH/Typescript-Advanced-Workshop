type Features = 'Profile' | 'History' | 'Payment' | 'Archiving'

type FeatureFlag = Record<Features, boolean>;

// Valid Feature Flags
const featureFlags: FeatureFlag = {
    Profile: true,
    History: false,
    Payment: true,
    Archiving: false
}

// Invalid Feature Flags
const featureFlags1: FeatureFlag = {
    Profiles: true,
    History: false,
    SomeOtherPoint: true,
    Archiving: false
}

// Invalid Feature Flags
const featureFlags2: FeatureFlag = {
    Profiles: true,
    History: 'false',
    SomeOtherPoint: 33,
    Archiving: false
}


export {}
