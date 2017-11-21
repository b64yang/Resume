export const selectCompany = (ex) => {
    console.log("You clicked on experience with company ", ex.Company);
    return {
        type: 'COMPANY_SELECTED',
        payload: ex
    }
}

export const selectProject = (proj) => {
    console.log("You clicked on experience with company ", proj.ProjectName);
    return {
        type: 'Project_SELECTED',
        payload: proj
    }
}

export const downloadResume = () => {
    console.log("You want to download resume")
    return {
        type: 'DOWNLOAD_RESUME'
    }
}