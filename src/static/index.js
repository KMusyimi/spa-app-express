const router = async () =>
{
    const routes = [
        { path: '/', view: () => console.log('object :>> dashboard ') },
        { path: '/posts', view: () => console.log('object :>> posts ') },
        { path: '/settings', view: () => console.log('object :>> settings ') }
    ];
    console.log('location.pathname :>> ', location.pathname);
    const potentialMatches = routes.map(route =>
    {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });
    if (!match)
    {
        match = {
            route: routes[0],
            result: [location.pathname],
        }
    }
    console.log('potentialMatches :>> ', potentialMatches);
};

document.addEventListener("DOMContentLoaded", ()=>{
    router();
})