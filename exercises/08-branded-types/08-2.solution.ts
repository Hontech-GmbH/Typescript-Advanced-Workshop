/**
 * Create an Email Branded Type and a TypeGuard that checks whether the input is a valid email address
 *
 * You can reuse the generic Brand type from exercise 1 or just type it inline
 *
 * You can use the following regex for Email validation: ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$
 */

type Email = string & { brand: 'Email' };

function sendEmail(email: Email): void {
    console.log('Sending email...', email);
}

function isEmail(value: string): value is Email {
    const pattern = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

    return pattern.test(value);
}

const validEmail = 'valid@mail.ch';
const invalidEmail = 'invalid@';

// Allow this call
if (isEmail(validEmail)) {
    sendEmail(validEmail);
}

// Prevent this call
if (isEmail(invalidEmail)) {
    sendEmail(invalidEmail);
}

// Expected Output: 'Sending email... valid@mail.ch'

export {}
