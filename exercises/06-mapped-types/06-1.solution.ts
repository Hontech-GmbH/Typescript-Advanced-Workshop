type Feature = {
    add: () => void,
    delete: () => void,
    edit: () => void
}

type FeatureFlag = {
    [Property in keyof Feature]: boolean
};

const featureFlags: FeatureFlag = {
    add: true,
    delete: false,
    edit: true
}

export {}
