var devs = [
    { login: "beautyfree",      name: "Alexey Elizarov" },
    { login: "kugaevsky",       name: "Nick Kugaevsky" },
    { login: "query-string",    name: "Alexander Timofeev"},
    { login: "noroot",          name: "noroot" },
    { login: "top4ek",          name: "Alexander" },
];

window.Github = Ember.Application.create({
    rootElement: "#github-app"
});

Github.Router.map(function() {
    this.resource("user", { path: "/users/:login"});
});

Github.IndexRoute = Ember.Route.extend({
    model: function () {
        return devs;
    }
});

Github.UserRoute = Ember.Route.extend({
    model: function(params) {
        return Ember.$.getJSON("http://api.github.com/users/" + params.login);
    }
});