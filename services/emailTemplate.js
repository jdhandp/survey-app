const keys = require('../config/keys');

module.exports = (survey) => {

    return `
        <html>
            <body>
                <div style="text-align : center;">
                    <h3>Kindly record your valuable feedbacks !!</h3>
                    <p> PLease answer the following survey questions </p>
                    <p>${survey.body}</p>
                    <div>
                      <a href= "${keys.domain}/api/survey/completed"> YES </a>
                    </div>
                    <div>
                      <a href= "${keys.domain}/api/survey/completed"> NO </a>
                    </div>
                </div>
            </body>
        </html>
    `;
};