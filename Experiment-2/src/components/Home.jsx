import React from 'react';
import Buttonio  from './Buttonio';
import UITextField from './Text_Filed';
import UISelect from './Select';
import UIRating from './Rating';
import UICheckbox from './CHeckBox';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <UITextField label="Name" /><br /><br />
      <UISelect /><br /><br />
      <UIRating /><br /><br />
      <UICheckbox label="Accept Terms" /><br />
      <Buttonio text="Submit" />
    </div>
  );
};

export default Home;