
// Compile all tags
riot.compile(function() {

    // Mount all Riot tags.
    riot.mount('*');

    // My app routes
    var
        Route = riot.router.Route,
        DefaultRoute = riot.router.DefaultRoute,
        NotFoundRoute = riot.router.NotFoundRoute,
        RedirectRoute = riot.router.RedirectRoute;

    riot.router.routes([
        new Route({tag: 'practice1'}),
        new DefaultRoute({tag: 'home'}),
        new RedirectRoute({from: 'h', to: 'home'}),
        new NotFoundRoute({tag: 'not-found'}),
    ]);

    // Start routing
    riot.router.start();
});