async function getPhotographers() {
    let response = await fetch('../data/photographers.json')
    return await response.json()
}