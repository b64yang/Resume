const initialState = {
    Company: "TITUS",
    CompanyLink: "https://www.titus.com/",
    CompanyDescription: "",
    Location: "Ottawa Canada",
    Logo: "TITUS.jpg",
    Time: "2017-January to 2017-May",
    Title: "Automation Developer",
    WorkContent: "",
    id: "1"
}

export default function (state = null, action) {
    console.log("action payload: " + action.payload)
    switch (action.type) {
        case 'COMPANY_SELECTED':
            return action.payload
        default: {
            return state
        }
    }
}