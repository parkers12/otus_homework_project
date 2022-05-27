export function getList() {
    return fetch("/api/data")
      .then(data => data.json())
}