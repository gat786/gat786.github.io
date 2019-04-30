reposcounturl = "https://api.github.com/users/gat786"

async function loadData() {
    const response = await fetch(reposcounturl)
    const json = await response.json();
    return json;
}

loadData().then((data)=>{
    $("#no_of_repo").html(data["public_repos"]);
    activeFrom = data["created_at"];
    $('#active_from_data').html(activeFrom.substring(0,10));
    $('#followers').html(data["followers"]);
    $('#following').html(data["following"]);
})
