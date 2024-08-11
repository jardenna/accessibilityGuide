import { FC, useEffect, useRef } from 'react';
import Checkbox from '../components/formElements/checkbox/Checkbox';
import Form from '../components/formElements/form/Form';
import {
  checkboxItems,
  radioButtonGenderList,
} from '../components/formElements/formLists/formList';
import Input from '../components/formElements/Input';
import { phoneMask } from '../components/formElements/masks';
import NumberStep from '../components/formElements/numberStep/NumberStep';
import RadioButton from '../components/formElements/radioButton/RadioButton';
import validatePrice from '../components/formElements/validation/priceValidation';
import PageTitle from '../components/PageTitle';
import useFormValidation from '../hooks/useFormValidation';
import { Title } from '../types/lang';

const FormElements: FC = () => {
  const initialFormValues = {
    price: '',
    phone: '',
    fullName: '',
    age: '',
    genderOption: 'woman',
    tickets: 1,
    selectedItems: ['Option 1', 'Option 3'],
    email: '',
    address: '',
  };
  const refs: any = {
    phone: useRef<HTMLInputElement>(null),
    fullName: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
  };

  //   {
  //     "phone": "Please enter Your phone no.",
  //     "fullName": "Please enter Your name",
  //     "email": "Please enter Your email"
  // }

  const { onChange, onSubmit, values, handleClick, errors, onBlur } =
    useFormValidation({
      callback: (values) => {
        console.log('Form submitted with values', values);
      },
      initialState: initialFormValues,
      validate: validatePrice,
    });

  useEffect(() => {
    const errorFields = Object.keys(errors);

    if (errorFields.length > 0) {
      const firstErrorField = errorFields[0];

      refs[firstErrorField]?.current?.focus();
    }
  }, [errors]);

  return (
    <>
      <PageTitle title={Title.FormElements} />

      <details className="govuk-details">
        <summary className="govuk-details__summary">
          <span className="govuk-details__summary-text">
            Help with nationality
          </span>
        </summary>
        <div className="govuk-details__text">
          We need to know your nationality so we can work out which elections
          you’re entitled to vote in. If you cannot provide your nationality,
          you’ll have to send copies of identity documents through the post.
        </div>
      </details>

      <Form onSubmit={onSubmit} labelText="Submit form">
        <fieldset>
          <legend>Personal information</legend>
          <Input
            value={values.fullName}
            onChange={onChange}
            id="fullName"
            name="fullName"
            labelText="Full name"
            required
            errorText={errors.fullName}
            onBlur={onBlur}
            inputRef={refs.fullName}
          />
          <Input
            value={values.age}
            onChange={onChange}
            id="age"
            name="age"
            labelText="Age"
            type="number"
          />
        </fieldset>
        <fieldset>
          <legend>Gender identity</legend>
          <RadioButton
            radioButtonList={radioButtonGenderList}
            name="genderOption"
            initialChecked={values.genderOption}
            onChange={onChange}
            formInfoText="Understanding the gender distribution of our users, helps us to promote diversity and ensure that no group is left out. All data collected is used in accordance with our Privacy Policy."
          />
        </fieldset>
        <fieldset>
          <legend>Contact information</legend>
          <Input
            value={values.email}
            onChange={onChange}
            id="email"
            name="email"
            labelText="Email"
            type="email"
            required
            errorText={errors.email}
            onBlur={onBlur}
            inputRef={refs.email}
          />
          <Input
            value={values.address}
            onChange={onChange}
            id="address"
            name="address"
            labelText="Address"
          />
          <Input
            value={values.phone}
            onChange={(event) => onChange(phoneMask(event))}
            labelText="Phone"
            id="phone"
            name="phone"
            placeholder="(--)--- ---"
            required
            errorText={errors.phone}
            onBlur={onBlur}
            inputRef={refs.phone}
          />
        </fieldset>
        <fieldset>
          <legend>Choose an option</legend>
          <Checkbox
            onChange={onChange}
            values={values.selectedItems}
            checkBoxList={checkboxItems}
          />
        </fieldset>

        <NumberStep
          onChange={onChange}
          handleClick={handleClick}
          value={values.tickets}
          min="1"
          labelText="Buy Tickets"
          id="tickets"
          name="tickets"
        />
      </Form>
    </>
  );
};

export default FormElements;
