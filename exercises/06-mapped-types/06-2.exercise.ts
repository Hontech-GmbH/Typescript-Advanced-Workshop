/**
 * Modify FeatureFlag Type from exercise 1 to accept a generic type and not only type Feature
 */

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

type FeatureFlag = {
    [Property in keyof Feature]: boolean
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
