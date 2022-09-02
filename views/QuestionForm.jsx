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
              <input id="inputField" name="inputAnswer" type="text" placeholder="" autoComplete="off" />
            </label>
          </p>
          <p><input id="buttonField" type="submit" value="Введите ответ" /></p>
        </form>
      </div>
    </Layout>
  );
};
