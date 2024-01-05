/**
 * Array of public routes that are accessible to the public
 * those routes do not need authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/"];

/**
 * Array of routes used for authentication
 * those routes will redirect logged user to "/settings"
 * @type {string[]}
 */
export const authRoutes: string[] = ["/auth/login", "/auth/register"];

/**
 * The prefix for API authentication routes
 * Routes that starts with this prefix are used for authentication proposes"
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The redirect path after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/api/auth";
