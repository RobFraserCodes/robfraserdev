import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Specify the routes that should be public
  publicRoutes: [
    "/play", // Matches exactly "/play"
    "/play/:path*" // Matches any sub-routes under "/play"
  ],
  // Specify routes that should be ignored by the middleware
  ignoredRoutes: ["/", "/about", "/contact", "/blog"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};