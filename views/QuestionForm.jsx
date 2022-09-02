/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function QuestionForm({ formId, questText }) {
  return (
    <Layout>
      <div className="questionDiv shadow-lg p-3 mb-5 bg-body rounded">
      
        <form className="questionForm" id={formId} method="get" action="/">
          <p>
            <label htmlFor="questText">
              {questText}
              <div className="mb-3">
                <input autoComplete="off" id="inputField" name="inputAnswer" type="text" className="form-control" placeholder="" />
              </div>
            </label>
          </p>
          <div className="mb-3">
            <input id="buttonField" className="btn btn-outline-primary" type="submit" value="Введите ответ" />
          </div>
        </form>
        
        <div className="qDiv" />
        </div>
        
      
    </Layout>
  );
};
