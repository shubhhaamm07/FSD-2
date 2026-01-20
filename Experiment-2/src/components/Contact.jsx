import UITextField from "../components/Text_Filed";
import UISelect from "../components/Select";
import UIRating from "../components/Rating";
import UICheckbox from "../components/CHeckBox";
import Buttonio from "../components/Buttonio";

const Contact = () => {
  return (
    <div>
      <h2>Contact Page</h2>

      <UITextField label="Email" />
      <br /><br />

      <UISelect />
      <br /><br />

      <UICheckbox label="Subscribe" />
      <br /><br />

      <UIRating />
      <br /><br />

      <Buttonio text="Contact Us" />
    </div>
  );
};

export default Contact;
