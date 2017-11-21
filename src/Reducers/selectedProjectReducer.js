// const initialState = {
//     ProjectName: "Note Book",
//     ProjectCategory: "iOS App",
//     SkillsInvolved: "Swift, Objective-C, CoreData, SQLite",
//     ProjectDescription: "",
//     ProjectLink:  "",
//     id: "1"
// }

export default function (state = null, action) {
    console.log("action payload: " + action.payload)
    switch (action.type) {
        case 'Project_SELECTED':
            return action.payload
        default: {
            return state
        }
    }
}