
export function getIcon() {
    return fetch("/api/data")
      .then(response => response.json())
}

export function getMenu() {
    return fetch("/api/map")
      .then(response => response.json())
}