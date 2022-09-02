const React = require('react');
const Layout = require('./Layout');

module.exports = function QuestionForm({ formId, questText }) {
  return (
    <Layout>
      <form className="questionForm" id={formId} method="get" action="/">
        <p>
          <label htmlFor="questText">
            {questText}
            <input id="sides" name="sides" type="number" placeholder="" />
          </label>
        </p>
        <p><input type="submit" value="Roll the Die" /></p>
      </form>
    </Layout>
  );
};
