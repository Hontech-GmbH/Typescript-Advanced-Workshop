type Feature = {
    add: () => void,
    delete: () => void,
    edit: () => void
}

type OtherFeature = {
    read: () => void,
    archive: () => void,
    send: () => void,
}

type FeatureFlag<Type> = {
    [Property in keyof Type]: boolean
};

const featureFlags: FeatureFlag<Feature> = {
    add: true,
    delete: false,
    edit: true
}

const otherfeatureFlags: FeatureFlag<OtherFeature> = {
    read: true,
    archive: true,
    send: false
}

export {}
