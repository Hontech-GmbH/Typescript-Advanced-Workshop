/**
 * Create an Email Branded Type and a TypeGuard that checks whether the input is a valid email address
 *
 * You can reuse the generic Brand type from exercise 1 or just type it inline
 *
 * You can use the following regex for Email validation: ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$
 */

type Email = string;

function sendEmail(email: Email): void {
    console.log('Sending email...', email);
}

const validEmail = 'valid@mail.ch';
const invalidEmail = 'invalid@';

// Allow this call
sendEmail(validEmail);

// Prevent this call
sendEmail(invalidEmail);

// Expected Output: 'Sending email... valid@mail.ch'

export {}
