import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ["/", "/about", "/contact", "/education", "/projects", "/blog", "/blog/[slug]", "/api/contact-form" ],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: [],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};