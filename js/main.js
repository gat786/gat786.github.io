reposcounturl = "https://api.github.com/users/gat786/repos?per_page=1000"

const action = async () => {
    const response = await fetch(reposcounturl)
    const json = await response.json();
    console.log(json)
}
