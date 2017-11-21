import { createLogic }          from 'redux-logic';
import axios                    from 'axios';
import fileDownload from 'js-file-download';

const downloadResume = createLogic({
    type: 'DOWNLOAD_RESUME',
    async process({ getState, action, APIEndpoint }, dispatch, done) {
        try {
            //const result = await axios.get(APIEndpoint + '/download/resume')
            //console.log(result.data)
            fileDownload('./ResumeBowen.pdf', 'Resume.pdf')
            done();
        } catch (err) {
            console.log(err)
        }
    }
});

export default [
    downloadResume
]