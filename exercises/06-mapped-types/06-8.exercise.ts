/**
 * Modify the ActionEvent type so that for every action in type Action we have an event function
 * Event functions always return void
 * Make sure that the event is written in camelCase
 *
 * e.g. action: add: () => void
 *      event: onAdd: () => void
 */

type Action = {
    add: () => void,
    remove: () => void;
}

type ActionEvent = Action;

const events: ActionEvent = {
    onAdd: () => console.log('item added'),
    onRemove: () => console.log('item removed'),
}

export {}
