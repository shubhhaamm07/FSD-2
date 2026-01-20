import React from 'react';
import Buttonio from './Buttonio';
import UITextField from './Text_Filed';
import UISelect from './Select';
import UIRating from './Rating';
import UICheckbox from './CHeckBox';

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <UITextField label="Feedback" /><br /><br />
      <UIRating /><br /><br />
      <UISelect /><br /><br />
      <UICheckbox label="I Agree" /><br />
      <Buttonio text="Send" />
    </div>
  );
};

export default About;