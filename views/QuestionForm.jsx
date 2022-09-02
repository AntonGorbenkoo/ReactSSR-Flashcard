/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function QuestionForm({ formId, questText }) {
  return (
    <Layout>
      <form className="questionForm shadow-lg p-3 mb-5 bg-body rounded" id={formId} method="get" action="/">
        <p>
          <label htmlFor="questText">
            {questText}
            <input id="sides" name="inputAnswer" type="text" placeholder="" />
          </label>
        </p>
        <p><input type="submit" value="Введите ответ" /></p>
      </form>
    </Layout>
  );
};
