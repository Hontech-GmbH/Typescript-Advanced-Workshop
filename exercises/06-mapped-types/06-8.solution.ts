type Action = {
    add: () => void,
    remove: () => void;
}

type ActionEvent = {
    [Property in keyof Action as `on${Capitalize<Property>}`]: () => void
};

const events: ActionEvent = {
    onAdd: () => console.log('item added'),
    onRemove: () => console.log('item removed'),
}

export {}
