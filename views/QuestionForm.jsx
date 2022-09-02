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

              <input autoComplete="off" id="inputField" name="inputAnswer" type="text" placeholder="" />

            </label>
          </p>
          <p><input id="buttonField" className="btn btn-outline-primary" type="submit" value="Введите ответ" /></p>
        </form>
        <div className="qDiv"></div>
      </div>
    </Layout>
  );
};
