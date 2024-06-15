export function onRequest(context) {
    const url = new URL(context.request.url)
    url.host = 'traccar-eu.fleetmap.pt'
    return fetch(new Request(url, context.request))
}
