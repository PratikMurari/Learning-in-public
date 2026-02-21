"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "42";
// forceful type assertion, we are telling the compiler that we know better than it does about the type of response.
let numericLength = response.length;
// (response as string) is a type assertion that tells the compiler to treat response as a string, allowing us to access the length property without any type errors.
// However, this can lead to runtime errors if response is not actually a string, so it should be used with caution.
//# sourceMappingURL=5.moreTypes.js.map