
export function getIcon() {
    return fetch("/api/data")
      .then((response) => {
        if(response.status === 200) {
          return response.json();     
        } else {
          console.log("SOMETHING WENT WRONG")
          this.setState({ requestFailed: true })
        }
      })
}

// export function getMenu() {
//     return fetch("/api/map")
//       .then((response) => {
//         if(response.status === 200) {
//           return response.json();     
//         } else {
//           console.log("SOMETHING WENT WRONG")
//           this.setState({ requestFailed: true })
//         }
//       })
// }

export function getMenu() {
  return fetch("/api/menu")
    .then((response) => {
      if(response.status === 200) {
        return response.json();     
      } else {
        console.log("SOMETHING WENT WRONG")
        this.setState({ requestFailed: true })
      }
    })
}