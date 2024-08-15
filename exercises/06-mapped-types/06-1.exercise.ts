/**
 * Modify the Mapped Type FeatureFlag so that we have a boolean Flag for every property in type Feature
 */

type Feature = {
    add: () => void,
    delete: () => void,
    edit: () => void
}

type FeatureFlag = Feature;

const featureFlags: FeatureFlag = {
    add: true,
    delete: false,
    edit: true
}

export {}
