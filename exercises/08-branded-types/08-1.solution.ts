type Brand<BaseType, BrandName extends string> = BaseType & { __brand: BrandName };

// Should create type string & { __brand: 'UserId' }
type UserId = Brand<string, 'UserId'>

// Should create type string & { __brand: 'SocialSecurityNumber' }
type SocialSecurityNumber = Brand<string, 'SocialSecurityNumber'>

export {}
