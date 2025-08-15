

const Base_Url = "http://194.187.122.34"

const resources = {
    menu: "/api/menu",
    login: "/api/login",
}

async function getMeny() {
    const response = await fetch(Base_Url + resources.menu);
    const data = await response.json();
    console.log(data);
}

getMeny();