/**
 * Create a Generic Type that creates Branded Types
 */

type Brand<BaseType, BrandName> = BaseType;

// Should create type string & { __brand: 'UserId' }
type UserId = Brand<string, 'UserId'>

// Should create type string & { __brand: 'SocialSecurityNumber' }
type SocialSecurityNumber = Brand<string, 'SocialSecurityNumber'>

export {}
