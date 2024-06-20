import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
let appRouter = null;
export function registerRouter(router) {
    appRouter = router;
}
export default ((req)=>{
    if (!appRouter) {
        throw new Error('Router is not registered. Use `registerRouter` to register your TRPC router.');
    }
    return fetchRequestHandler({
        endpoint: '/api/trpc',
        req: req,
        router: appRouter
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wa21tdGUvRG9jdW1lbnRzL0dpdEh1Yi9yb2JvL3BhY2thZ2VzL3BsdWdpbi10cnBjL3NyYy9hcGkvdHJwYy9bdHJwY10udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ0B0cnBjL3NlcnZlci9hZGFwdGVycy9mZXRjaCdcbmltcG9ydCB0eXBlIHsgUm9ib1JlcXVlc3QgfSBmcm9tICdAcm9ib2pzL3NlcnZlcidcbmltcG9ydCB0eXBlIHsgUm91dGVyIH0gZnJvbSAnQHRycGMvc2VydmVyJ1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxudHlwZSBSb3V0ZXJUeXBlID0gUm91dGVyPGFueT5cbmxldCBhcHBSb3V0ZXI6IFJvdXRlclR5cGUgfCBudWxsID0gbnVsbFxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJSb3V0ZXIocm91dGVyOiBSb3V0ZXJUeXBlKSB7XG5cdGFwcFJvdXRlciA9IHJvdXRlclxufVxuXG5leHBvcnQgZGVmYXVsdCAocmVxOiBSb2JvUmVxdWVzdCkgPT4ge1xuXHRpZiAoIWFwcFJvdXRlcikge1xuXHRcdHRocm93IG5ldyBFcnJvcignUm91dGVyIGlzIG5vdCByZWdpc3RlcmVkLiBVc2UgYHJlZ2lzdGVyUm91dGVyYCB0byByZWdpc3RlciB5b3VyIFRSUEMgcm91dGVyLicpXG5cdH1cblxuXHRyZXR1cm4gZmV0Y2hSZXF1ZXN0SGFuZGxlcih7XG5cdFx0ZW5kcG9pbnQ6ICcvYXBpL3RycGMnLFxuXHRcdHJlcTogcmVxLFxuXHRcdHJvdXRlcjogYXBwUm91dGVyXG5cdH0pXG59XG4iXSwibmFtZXMiOlsiZmV0Y2hSZXF1ZXN0SGFuZGxlciIsImFwcFJvdXRlciIsInJlZ2lzdGVyUm91dGVyIiwicm91dGVyIiwicmVxIiwiRXJyb3IiLCJlbmRwb2ludCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsbUJBQW1CLFFBQVEsOEJBQTZCO0FBTWpFLElBQUlDLFlBQStCO0FBRW5DLE9BQU8sU0FBU0MsZUFBZUMsTUFBa0I7SUFDaERGLFlBQVlFO0FBQ2I7QUFFQSxlQUFlLENBQUEsQ0FBQ0M7SUFDZixJQUFJLENBQUNILFdBQVc7UUFDZixNQUFNLElBQUlJLE1BQU07SUFDakI7SUFFQSxPQUFPTCxvQkFBb0I7UUFDMUJNLFVBQVU7UUFDVkYsS0FBS0E7UUFDTEQsUUFBUUY7SUFDVDtBQUNELENBQUEsRUFBQyJ9